import { memo } from 'react';
import { PostType } from '@/@types/types.ts';
import { AddPostForm } from './addPostForm';
import st from './MyPosts.module.css';
import { Post } from './post';

type Props = {
    posts: Array<PostType>;
    addPost: (newPostText: string) => void;
};

const MyPosts = memo(({ posts, addPost }: Props) => {
    const postElement = posts.map((p) => (
        <Post
            message={p.message}
            likesCount={p.likesCount}
            key={p.id}
        />
    ));

    const addNewPost = ({ newPostText }: { newPostText: string }) => {
        addPost(newPostText);
    };

    return (
        <div className={st.posts}>
            <h3>My posts</h3>
            <AddPostForm addNewPost={addNewPost} />
            <div>{postElement}</div>
        </div>
    );
});

export default MyPosts;
