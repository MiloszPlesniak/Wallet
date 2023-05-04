import React from 'react';
import PropTypes from 'prop-types';
import { Vortex } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/global/selectors';
const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Vortex
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}
      wrapperClass="vortex-wrapper"
      colors={[
        '#E7EAF2',
        '#C5BAFF',
        '#FFD8D0',
        '#E7EAF2',
        '#C5BAFF',
        '#FFD8D0',
      ]}
      visible={Boolean(isLoading)}
    />
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
