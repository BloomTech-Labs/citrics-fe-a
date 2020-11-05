import React from 'react';
import SearchSlider from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <SearchSlider styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <SearchSlider styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <SearchSlider styles={desktopStyles} />
    </IsDesktop>
  </>
);
