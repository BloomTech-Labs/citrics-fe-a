import React, { useEffect } from 'react';
import { SearchBar } from '../../common';
// import '../../styles/style.less';
import styles from './styles.js';
import { useSelector } from 'react-redux';
import { Slider, Button } from 'antd';

export default ({ display }) => {
  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  return (
    <div
      // className="search-container"
      style={{ ...sty.container, backgroundColor: 'unset' }}
    >
      <div style={{ ...sty.style2 }}>
        <SearchBar />
        <SearchBar />
      </div>
      <hr style={{ border: 'solid 2px white', width: '80%' }} />
      <div style={{ ...sty.style2 }}>
        <Slider autoFocus={true} min={0} max={1000000} range={true} />
        <Slider autoFocus={true} min={0} max={1000000} range={true} />
        <Slider autoFocus={true} min={0} max={1000000} range={true} />
      </div>
      <div>
        <Button>Find Cities</Button>
      </div>
    </div>
  );
};
