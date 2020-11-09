import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SearchBar } from '../../common';
import { searchBarActs, cardContainerActs } from '../../../state/actions';

// import '../../styles/style.less';
import styles from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { Slider, Button } from 'antd';

export default ({ display }) => {
  const { fetchSpecificCityData } = cardContainerActs;
  const dispatch = useDispatch();
  const history = useHistory();
  const currentLocation = useLocation().pathname;
  const [cities, setCities] = useState([]);

  useEffect(() => {
    console.log(cities);
    if (currentLocation != '/compare' && cities.length === 2)
      history.push('/compare');
    cities.forEach(c => {
      dispatch(fetchSpecificCityData(c.id, c.value));
    });
  }, [cities]);

  const theme = useSelector(state => state.theme);
  const sty = styles(display, theme);

  return (
    <div
      // className="search-container"
      style={{ ...sty.container, backgroundColor: 'unset' }}
    >
      <div style={{ ...sty.style2 }}>
        <SearchBar setCities={setCities} cities={cities} />
        <SearchBar setCities={setCities} cities={cities} />
      </div>
      <hr style={{ border: 'solid 2px white', width: '80%' }} />
      <div style={{ ...sty.style2 }}>
        <div style={{ ...sty.sliderStyle }}>
          <h4 style={{ margin: '0' }}>Population</h4>
          <Slider autoFocus={true} min={0} max={1000000} range={true} />
        </div>
        <div style={{ ...sty.sliderStyle }}>
          <h4 style={{ margin: '0' }}>Population</h4>
          <Slider autoFocus={true} min={0} max={1000000} range={true} />
        </div>
        <div style={{ ...sty.sliderStyle }}>
          <h4 style={{ margin: '0' }}>Population</h4>
          <Slider autoFocus={true} min={0} max={1000000} range={true} />
        </div>
      </div>
      <div>
        <Button>Find Cities</Button>
      </div>
    </div>
  );
};
