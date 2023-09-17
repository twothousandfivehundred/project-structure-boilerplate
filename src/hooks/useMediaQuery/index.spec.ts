import useMediaQuery from '.';
import { createHookTestMethods } from '~/services/testing/react/reactUtils';
import { getMediaMatch } from './logic';

jest.mock('./logic', () => ({
  getMediaMatch: jest.fn(() => true),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('useMediaQuery', () => {
  const queryString = '@media (min-width: 600px)';
  const { mount } = createHookTestMethods(useMediaQuery, queryString);

  it('should call getMediaMatch on mount', () => {
    mount();

    expect(getMediaMatch).toHaveBeenCalledTimes(1);
    expect(getMediaMatch).toHaveBeenCalledWith(queryString);
  });

  it('should NOT call getMediaMatch on rerender or no data change', () => {
    const { rerender } = mount();
    (getMediaMatch as jest.Mock).mockClear();

    rerender();
    rerender(queryString);

    expect(getMediaMatch).toHaveBeenCalledTimes(0);
  });

  it('should call getMediaMatch when the queryString changes', () => {
    const { rerender } = mount();
    (getMediaMatch as jest.Mock).mockClear();
    const newQueryString = '@media (min-width: 9001px)';

    rerender(newQueryString);

    expect(getMediaMatch).toHaveBeenCalledTimes(1);
    expect(getMediaMatch).toHaveBeenCalledWith(newQueryString);
  });

  // it('should bind to the resize event on mount', () => {});

  // it('should unbind from the resize event on unmount', () => {});

  // it('should rebind the resize callback when the queryString changes', () => {});

  // it('should call getMediaMatch when the resize event is fired', () => {});
});
