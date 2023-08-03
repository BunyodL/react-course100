import React from "react";
import preloader from '../../../images/Spinner-1s-200px.svg'

const Preloader = (props) => {
  return (
    <div style={{ background: 'white' }}>
      <img src={preloader} alt="preloader" />
    </div>
  )
}

export default Preloader