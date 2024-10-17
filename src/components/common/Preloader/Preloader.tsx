import preloader from '../../../assets/gifs/Spinner-1s-200px.svg';
import st from './Preloader.module.css';

export const Preloader = () => {
  return <img src={preloader} alt='preloader' className={st.preloader} />;
};
