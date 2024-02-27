import { addMessage } from '../../../../redux/reducers/dialogs-reducer.ts';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';

export default connect(null, { addMessage })(AddMessage);
