import { addPost } from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  posts: state.profilePage.postsData,
});

export default connect(mapStateToProps, { addPost })(MyPosts);
