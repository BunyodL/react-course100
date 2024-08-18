import { connect } from 'react-redux';
import { RootState } from 'redux/redux-store';
import { PostType } from '../../../@types/types.ts';
import { actions } from '../../../redux/reducers/profile-reducer.ts';
import { MyPosts } from '.';

const { addPost } = actions;

type MapStateToProps = {
    posts: Array<PostType>;
};

type MapDispatchToProps = {
    addPost: (newPostText: string) => void;
};

const mapStateToProps = (state: RootState): MapStateToProps => ({
    posts: state.profilePage.postsData,
});

export default connect<MapStateToProps, MapDispatchToProps, {}, RootState>(mapStateToProps, {
    addPost,
})(MyPosts);
