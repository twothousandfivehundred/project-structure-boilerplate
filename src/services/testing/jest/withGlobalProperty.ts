/* eslint-disable @typescript-eslint/no-explicit-any */
import { NOOP } from '../../../constants/emptys';

const withGlobalProperty = (
  propertyName: any,
  tempValue: any,
  handler = NOOP,
) => {
  const { [propertyName]: originalProperty } = window;
  window[propertyName] = tempValue;
  handler();
  window[propertyName] = originalProperty;
};

export default withGlobalProperty;
