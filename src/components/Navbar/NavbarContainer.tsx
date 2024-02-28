import { connect } from 'react-redux';
import { RootState } from "redux/redux-store";
import { FriendType } from "types/types";
import Navbar from './Navbar.tsx';

type MapStateToProps = {
  friends: Array<FriendType>
}

const mapStateToProps = (state: RootState):MapStateToProps => ({
  friends: state.sidebar.friends,
});

export default connect<MapStateToProps, {}, {}, RootState>(mapStateToProps)(Navbar);
