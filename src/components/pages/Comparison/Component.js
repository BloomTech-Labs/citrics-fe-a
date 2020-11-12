import React from 'react';
import { Canvas } from '../../layouts';
import CardContainer from '../../common/CardContainer';
import '../../../styles/ComparisonPage.less';
import { styles } from './styles';
import { CityCard, PlotlyCard, SearchBar } from '../../common';
import { useSelector } from 'react-redux';

export default ({ styles }) => {
  const cityData = useSelector(state => state.cardContainer.cityData);
  const Blank = () => <div></div>;

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
            <SearchBar />
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
