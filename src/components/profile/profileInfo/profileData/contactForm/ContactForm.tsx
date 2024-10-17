import { createField } from 'components/common/formsControls/createField.tsx';
import { Input } from '../../../../common/formsControls';
import st from './ContactForm.module.css';

const ContactForm = ({ contactName }: { contactName: string }) => {
    return (
        <div className={st.contact}>
            <b>{contactName}:</b>
            {createField(`contacts.${contactName}`, '', Input, contactName, undefined)}
        </div>
    );
};

export default ContactForm;
