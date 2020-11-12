import React, { useState, useEffect } from 'react';
import { Canvas } from '../../layouts';
import CardContainer from '../../common/CardContainer';
import '../../../styles/ComparisonPage.less';
import { styles } from './styles';
import { CityCard, PlotlyCard, SearchBar } from '../../common';
import { useSelector, useDispatch } from 'react-redux';
import { cardContainerActs } from '../../../state/actions';

export default ({ styles }) => {
  const cityData = useSelector(state => state.cardContainer.cityData);
  const [newCity, setNewCity] = useState();
  const { fetchSpecificCityData } = cardContainerActs;

  const dispatch = useDispatch();

  useEffect(() => {
    if (newCity) {
      dispatch(fetchSpecificCityData(newCity.id, newCity.value));
    }
  }, [newCity]);

  const onSelect = (value, city) => {
    setNewCity(city);
  };

  return (
    <Canvas
      // Side={SearchPanel}
      Main={() => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: '10%',
            }}
          >
            <SearchBar onSelect={onSelect} />
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              {cityData.length && cityData.map(c => <CityCard city={c} />)}
            </div>
            {/* <div className="wrapper" style={{ margin: 'auto' }}> */}
            {cityData.length && (
              <CardContainer
                className="card-container"
                Card={PlotlyCard}
                styles={{ width: '70%' }}
              />
            )}
            {/* </div> */}
          </div>
        );
      }}
    />
  );
};
