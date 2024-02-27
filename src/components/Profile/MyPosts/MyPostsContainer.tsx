import { RootState } from "redux/redux-store";
import { addPost } from '../../../redux/reducers/profile-reducer.ts';
import MyPosts from './MyPosts.tsx';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  posts: state.profilePage.postsData,
});

export default connect(mapStateToProps, { addPost })(MyPosts);
