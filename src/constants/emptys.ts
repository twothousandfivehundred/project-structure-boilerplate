/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// empty basics
export const EMPTY_ARR: any = Object.freeze([]);
export const EMPTY_OBJ: Record<string, unknown> = Object.freeze({});

export const EMPTY_PROMISE = (): Promise<void> =>
  new Promise((resolve) => {
    window?.setTimeout(() => {
      resolve();
    });
  });
export const EMPTY_UNRESOLVED_PROMISE = (): Promise<void> =>
  new Promise(() => {
    // empty fn
  });

// empty functions
export const NOOP = (...args: any[]) => {
  // empty fn
};
export const FALSE_OP = (...args: any[]) => false;
export const NULL_OP = (...args: any[]) => null;
export const TRUE_OP = (...args: any[]) => true;
