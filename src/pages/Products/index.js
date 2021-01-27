import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjTwo } from './Data';
import Pricing from '../../components/Pricing';

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;