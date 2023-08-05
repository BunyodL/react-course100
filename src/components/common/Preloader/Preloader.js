import React from "react";
import preloader from '../../../images/Spinner-1s-200px.svg'

const Preloader = (props) => {
  return <img src={preloader} alt="preloader" style={{ background: 'white' }} />
}

export default Preloader