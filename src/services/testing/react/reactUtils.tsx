/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { shallow } from 'enzyme';
import { act, renderHook } from '@testing-library/react';

export const createComponentTestMethods = (
  Component: React.ElementType,
  defaultProps = {},
) => {
  const mount = (customProps = {}) =>
    shallow(<Component {...defaultProps} {...customProps} />);
  const mountElement = (
    node: React.ReactElement<
      unknown,
      string | React.JSXElementConstructor<any>
    >,
  ) => shallow(node);

  return { mount, mountElement };
};

export const createHookTestMethods = (
  hook: (...args: any[]) => any,
  ...defaultArgs: any[]
) => {
  const mount = (...mountArgs: any[]) => {
    const { rerender, ...rest } = renderHook((hookArgs) => hook(...hookArgs), {
      initialProps: mountArgs.length ? mountArgs : defaultArgs,
    });

    return {
      rerender: (...newArgs: any[]) =>
        rerender(newArgs.length ? newArgs : defaultArgs),
      interact: act,
      ...rest,
    };
  };

  return { mount };
};
