/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { shallow } from 'enzyme';
import { act, renderHook } from '@testing-library/react';

import {
  createComponentTestMethods,
  createHookTestMethods,
} from './reactUtils';

jest.mock('enzyme', () => ({
  shallow: jest.fn(),
}));

jest.mock('@testing-library/react', () => ({
  act: jest.fn(),

  // renderHook returns api functions that we want to pass to the tester
  renderHook: jest.fn(() => ({
    rerender: jest.fn(),
    internalFunc1: jest.fn(),
    internalFunc2: jest.fn(),
    internalFunc3: jest.fn(),
  })),
}));

const useCustomState = (initialState: string) => {
  const [world] = useState(initialState);
  return world;
};

const FakeStatefulComponent = ({ hello }: any) => {
  const world = useCustomState('World');
  return (
    <div>
      {hello} {world}
    </div>
  );
};

describe('createComponentTestMethods(Component, defaultProps) - with default props', () => {
  const defaultProps = {
    hello: 'hello',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns object with correct apis', () => {
    const res = createComponentTestMethods(FakeStatefulComponent, defaultProps);

    expect(typeof res.mount).toBe('function');
    expect(typeof res.mountElement).toBe('function');
  });

  describe('mountElement()', () => {
    const someNode = (
      <>
        <div>hello world</div>
        <div>goodbye world</div>
      </>
    );

    const { mountElement } = createComponentTestMethods(
      FakeStatefulComponent,
      defaultProps,
    );

    it('shallow mounts node with enzyme', () => {
      mountElement(someNode);

      expect(shallow).toHaveBeenCalledWith(someNode);
    });

    it('returns wrapper object to test with', () => {
      const wrapper = mountElement(someNode);

      expect(wrapper).toBe((shallow as jest.Mock).mock.results[0].value);
    });
  });

  describe('mount()', () => {
    const { mount } = createComponentTestMethods(
      FakeStatefulComponent,
      defaultProps,
    );

    it('shallow mounts component with enzyme', () => {
      mount();

      expect(shallow).toHaveBeenCalledWith(
        <FakeStatefulComponent {...defaultProps} />,
      );
    });

    it('returns wrapper object to test with', () => {
      const wrapper = mount();

      expect(wrapper).toBe((shallow as jest.Mock).mock.results[0].value);
    });
  });

  describe('mount({ Custom Props })', () => {
    it('shallow mounts component with enzyme with custom props', () => {
      const { mount } = createComponentTestMethods(
        FakeStatefulComponent,
        defaultProps,
      );

      mount({ a: 'custom', b: 'other' });

      expect(shallow).toHaveBeenCalledWith(
        <FakeStatefulComponent {...defaultProps} a="custom" b="other" />,
      );
    });

    it('custom props override default props', () => {
      const { mount } = createComponentTestMethods(
        FakeStatefulComponent,
        defaultProps,
      );

      mount({ hello: 'HELLO' });

      expect(shallow).toHaveBeenCalledWith(
        <FakeStatefulComponent {...defaultProps} hello="HELLO" />,
      );
    });

    it('returns wrapper object to test with', () => {
      const { mount } = createComponentTestMethods(
        FakeStatefulComponent,
        defaultProps,
      );

      const wrapper = mount({ test: 'test' });

      expect(wrapper).toBe((shallow as jest.Mock).mock.results[0].value);
    });
  });
});

describe('createComponentTestMethods(Component) - no default props', () => {
  it('returns object with correct apis', () => {
    const res = createComponentTestMethods(FakeStatefulComponent);

    expect(typeof res.mount).toBe('function');
    expect(typeof res.mountElement).toBe('function');
  });

  describe('mountElement()', () => {
    const someNode = (
      <>
        <div>hello world</div>
        <div>goodbye world</div>
      </>
    );

    const { mountElement } = createComponentTestMethods(FakeStatefulComponent);

    it('shallow mounts node with enzyme', () => {
      mountElement(someNode);

      expect(shallow).toHaveBeenCalledWith(someNode);
    });

    it('returns wrapper object to test with', () => {
      const wrapper = mountElement(someNode);

      expect(wrapper).toBe((shallow as jest.Mock).mock.results[0].value);
    });
  });

  describe('mount()', () => {
    const { mount } = createComponentTestMethods(FakeStatefulComponent);

    it('shallow mounts component with enzyme', () => {
      mount();

      expect(shallow).toHaveBeenCalledWith(<FakeStatefulComponent />);
    });

    it('returns wrapper object to test with', () => {
      const wrapper = mount();

      expect(wrapper).toBe((shallow as jest.Mock).mock.results[0].value);
    });
  });

  describe('mount({ Custom Props })', () => {
    const { mount } = createComponentTestMethods(FakeStatefulComponent);

    it('shallow mounts component with enzyme with custom props', () => {
      mount({ a: 'custom', b: 'other' });

      expect(shallow).toHaveBeenCalledWith(
        <FakeStatefulComponent a="custom" b="other" />,
      );
    });

    it('custom props override default props', () => {
      mount({ hello: 'HELLO' });

      expect(shallow).toHaveBeenCalledWith(
        <FakeStatefulComponent hello="HELLO" />,
      );
    });

    it('returns wrapper object to test with', () => {
      const wrapper = mount({ test: 'test' });

      expect(wrapper).toBe((shallow as jest.Mock).mock.results[0].value);
    });
  });
});

describe('createHookTestMethods(useCustomState, arg1, arg2, arg3) - with default arguments', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns object with mount function', () => {
    const res = createHookTestMethods(useCustomState, 'arg1', 'arg2', 'arg3');

    expect(typeof res.mount).toBe('function');
  });

  describe('mount()', () => {
    const customHook = jest.fn(() => jest.fn());
    const { mount } = createHookTestMethods(customHook, 'arg1', 'arg2', 'arg3');

    it('renders a react hook with @testing-library/react', () => {
      mount();

      expect(renderHook).toHaveBeenCalledTimes(1);
    });

    it('Called with a hook executer and does not invoke our hook', () => {
      mount();

      // Check we pass a function that takes the props and calls the hook with it.
      const [[hookExecuter, argObject]] = (renderHook as jest.Mock).mock.calls;
      expect(typeof hookExecuter).toBe('function');
      expect(argObject).toEqual({
        initialProps: ['arg1', 'arg2', 'arg3'],
      });

      // We don't invoke the hook.
      expect(customHook).toHaveBeenCalledTimes(0);
    });

    it('hookExecuter calls hook with arguments from array, returns hook result', () => {
      mount();

      // Check we pass a function that takes the props and calls the hook with it.
      const hookExecuter = (renderHook as jest.Mock).mock.calls[0][0];
      expect(typeof hookExecuter).toBe('function');

      const res = hookExecuter(['a', 'b', 'c']);

      expect(customHook).toHaveBeenNthCalledWith(1, 'a', 'b', 'c');

      expect(res).toBe(customHook.mock.results[0].value);
    });

    it('returns expected methods', () => {
      const items = mount();

      // Expected Functions
      expect(Object.keys(items).sort()).toEqual([
        'interact',
        'internalFunc1',
        'internalFunc2',
        'internalFunc3',
        'rerender',
      ]);

      // Are all functions.
      expect(Object.values(items).every((i) => typeof i === 'function')).toBe(
        true,
      );
    });

    it("interact is @testing-library/react's act", () => {
      const { interact } = mount();

      expect(interact).toBe(act);
    });

    it("rerender is a custom method that calls @testing-library/react's rerender", () => {
      const { rerender } = mount();

      const [
        {
          value: { rerender: realRerender },
        },
      ] = (renderHook as jest.Mock).mock.results;
      expect(rerender).not.toBe(realRerender);

      expect(realRerender).toHaveBeenCalledTimes(0);

      rerender();

      expect(realRerender).toHaveBeenCalledTimes(1);
      expect(realRerender).toHaveBeenCalledWith(['arg1', 'arg2', 'arg3']);

      rerender('x', 'y', '_');

      expect(realRerender).toHaveBeenCalledTimes(2);
      expect(realRerender).toHaveBeenCalledWith(['x', 'y', '_']);
    });
  });
});

describe('createHookTestMethods(useCustomState) - with no default arguments', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns object with mount function', () => {
    const res = createHookTestMethods(useCustomState);

    expect(typeof res.mount).toBe('function');
  });

  describe('mount()', () => {
    const customHook = jest.fn(() => jest.fn());
    const { mount } = createHookTestMethods(customHook);

    it('renders a react hook with @testing-library/react', () => {
      mount();

      expect(renderHook).toHaveBeenCalledTimes(1);
    });

    it('Called with a hook executer and does not invoke our hook', () => {
      mount();

      // Check we pass a function that takes the props and calls the hook with it.
      const [[hookExecuter, argObject]] = (renderHook as jest.Mock).mock.calls;
      expect(typeof hookExecuter).toBe('function');
      expect(argObject).toEqual({
        initialProps: [],
      });

      // We don't invoke the hook.
      expect(customHook).toHaveBeenCalledTimes(0);
    });

    it('hookExecuter calls hook with arguments from array, returns hook result', () => {
      mount();

      // Check we pass a function that takes the props and calls the hook with it.
      const hookExecuter = (renderHook as jest.Mock).mock.calls[0][0];
      expect(typeof hookExecuter).toBe('function');

      const res = hookExecuter(['a', 'b', 'c']);

      expect(customHook).toHaveBeenNthCalledWith(1, 'a', 'b', 'c');

      expect(res).toBe(customHook.mock.results[0].value);
    });

    it('returns expected methods', () => {
      const items = mount();

      // Expected Functions
      expect(Object.keys(items).sort()).toEqual([
        'interact',
        'internalFunc1',
        'internalFunc2',
        'internalFunc3',
        'rerender',
      ]);

      // Are all functions.
      expect(
        Object.values(items).filter((i) => typeof i !== 'function'),
      ).toEqual([]);
    });

    it("interact is @testing-library/react's act", () => {
      const { interact } = mount();

      expect(interact).toBe(act);
    });

    it("rerender is a custom method that calls @testing-library/react's rerender", () => {
      const { rerender } = mount();

      const [
        {
          value: { rerender: realRerender },
        },
      ] = (renderHook as jest.Mock).mock.results;
      expect(rerender).not.toBe(realRerender);

      expect(realRerender).toHaveBeenCalledTimes(0);

      rerender();

      expect(realRerender).toHaveBeenCalledTimes(1);
      expect(realRerender).toHaveBeenCalledWith([]);

      rerender('x', 'y', '_');

      expect(realRerender).toHaveBeenCalledTimes(2);
      expect(realRerender).toHaveBeenCalledWith(['x', 'y', '_']);
    });
  });
});
