import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjThree } from './Data';
import Pricing from '../../components/Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;