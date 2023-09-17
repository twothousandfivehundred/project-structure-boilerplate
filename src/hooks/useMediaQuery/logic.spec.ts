/* eslint-disable @typescript-eslint/no-explicit-any */
import withGlobalProperty from '~/services/testing/jest/withGlobalProperty';
import { getMediaMatch } from './logic';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('getMediaMatch', () => {
  it('returns false when window is undefined', () => {
    const windowSpy = jest.spyOn(global as any, 'window', 'get');
    windowSpy.mockImplementation(() => undefined);

    const result = getMediaMatch('@media (min-width: 600px)');

    expect(result).toBeFalsy();
    windowSpy.mockRestore();
  });

  it('returns false when matchMedia is undefined', () => {
    withGlobalProperty('matchMedia', undefined, () => {
      const result = getMediaMatch('@media (min-width: 600px)');

      expect(result).toBeFalsy();
    });
  });

  it('calls matchMedia with the sanitized queryString', () => {
    const matchMediaMock = jest.fn();
    withGlobalProperty('matchMedia', matchMediaMock, () => {
      getMediaMatch('@media (min-width: 600px)');

      expect(matchMediaMock).toHaveBeenCalledTimes(1);
      expect(matchMediaMock).toHaveBeenCalledWith('(min-width: 600px)');
    });
  });

  it('returns true if matches is truthy', () => {
    const matchMediaMock = jest.fn(() => ({ matches: true }));
    withGlobalProperty('matchMedia', matchMediaMock, () => {
      const result = getMediaMatch('@media (min-width: 600px)');

      expect(result).toBe(true);
    });
  });

  it('returns false if matches is falsey', () => {
    const matchMediaMock = jest.fn(() => ({ matches: false }));
    withGlobalProperty('matchMedia', matchMediaMock, () => {
      const result = getMediaMatch('@media (min-width: 600px)');

      expect(result).toBe(false);
    });
  });
});
