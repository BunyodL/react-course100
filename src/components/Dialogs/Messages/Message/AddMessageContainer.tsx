import { connect } from 'react-redux';
import { actions } from '../../../../redux/reducers/dialogs-reducer.ts';
import AddMessage from './AddMessage';

const { addMessage } = actions;

export default connect(null, { addMessage })(AddMessage);
