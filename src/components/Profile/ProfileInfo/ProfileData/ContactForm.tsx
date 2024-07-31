import { createField } from "components/common/FormsControls/createField";
import { Input } from '../../../common/FormsControls/FormControls.tsx';
import st from '../ProfileInfo.module.css';

const ContactForm = ({ contactName }: { contactName: string}) => {
  return (
    <div className={st.contact}>
      <b>{contactName}:</b>
      {createField(`contacts.${contactName}`, '', Input, contactName, undefined)}
    </div>
  );
};

export default ContactForm;
