import { FC } from 'react';
import st from './Contact.module.css';

type Props = {
  socialMediaName: string
  socialMediaLink: string
}

const Contact: FC<Props> = ({ socialMediaName, socialMediaLink }) => {
  return (
    <div className={st.contact}>
      <span>
        <b>{socialMediaName}:</b>
      </span>
      <div>{socialMediaLink}</div>
    </div>
  );
};

export default Contact;
