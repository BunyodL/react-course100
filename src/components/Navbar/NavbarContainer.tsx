import { connect } from 'react-redux';
import { RootState } from "redux/redux-store";
import Navbar from './Navbar.tsx';

const mapStateToProps = (state: RootState) => ({
  friends: state.sidebar.friends,
});

export default connect(mapStateToProps)(Navbar);
