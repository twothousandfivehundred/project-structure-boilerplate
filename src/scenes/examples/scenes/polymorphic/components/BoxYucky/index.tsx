/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
/* 
  Example YUCKY component.. use ../Box.. or so help me!
*/
import { BoxYuckyProps } from './types';

const BoxYucky = ({ isSection, isMain, children, ...props }: BoxYuckyProps) => {
  const Component: React.ElementType = 'div';
  // if (isSection) {
  //   Component = 'section';
  // } else if (isMain) {
  //   Component = 'main';
  // }

  return <Component {...props}>{children}</Component>;
};

export default BoxYucky;
