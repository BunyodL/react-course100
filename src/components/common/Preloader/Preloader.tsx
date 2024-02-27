import React, { FC } from 'react';
import preloader from '../../../images/Spinner-1s-200px.svg';
import st from './Preloader.module.css';

const Preloader: FC = () => {
  return <img src={preloader} alt='preloader' className={st.preloader} />;
};

export default Preloader;
