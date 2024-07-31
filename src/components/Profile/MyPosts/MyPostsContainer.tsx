import { connect } from 'react-redux';
import { RootState } from 'redux/redux-store';
import { PostType } from '../../../@types/types.ts';
import { addPost } from '../../../redux/reducers/profile-reducer.ts';
import MyPosts from './MyPosts.tsx';

type MapStateToProps = {
  posts: Array<PostType>;
};

type MapDispatchToProps = {
  addPost: (newPostText: string) => void;
};

const mapStateToProps = (state: RootState): MapStateToProps => ({
  posts: state.profilePage.postsData,
});

export default connect<MapStateToProps, MapDispatchToProps, {}, RootState>(
  mapStateToProps,
  { addPost }
)(MyPosts);
