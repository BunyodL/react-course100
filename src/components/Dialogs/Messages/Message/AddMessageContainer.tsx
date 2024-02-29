import { connect } from 'react-redux';
import { addMessage } from '../../../../redux/reducers/dialogs-reducer.ts';
import AddMessage from './AddMessage';

export default connect(null, { addMessage })(AddMessage);
