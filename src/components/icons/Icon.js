import React, {PropTypes} from 'react';
import s from './Icon.scss';

const Icon = ({children, viewBox, size, width, height, fill}) => (
  <svg
    className={s.iconDefault}
    width={width || size}
    height={height || size}
    viewBox={viewBox}
    fill={fill}
    >
    {children}
  </svg>
);

Icon.defaultProps = {
  size: '1em'
};

Icon.propTypes = {
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.any,
  fill: PropTypes.string,
  viewBox: PropTypes.string.isRequired
};

export default Icon;
