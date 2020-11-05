import React, { useEffect } from 'react';
import { Button } from '../../common';
// import '../../styles/style.less';
import styles from './styles.js';
import { useSelector } from 'react-redux';
import { Slider } from 'antd';

export default ({ display }) => {
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  return (
    <div
      className="search-container"
      style={{ ...sty.container, backgroundColor: 'unset' }}
    >
      <Slider autoFocus={true} min={0} max={1000000} range={true} />
      <Slider autoFocus={true} min={0} max={1000000} range={true} />
      <Slider autoFocus={true} min={0} max={1000000} range={true} />
    </div>
  );
};
