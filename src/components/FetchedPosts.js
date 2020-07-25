import React from "react";
import { Post } from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { Spinner } from "./Spinner";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts.fetchedPosts);
  const { isLoading } = useSelector((store) => store.app);

  const fetchPostsHandler = () => dispatch(fetchPosts());

  if (isLoading) {
    return <Spinner />;
  }

  if (!posts.length) {
    return (
      <>
        <p>Постов нет.</p>
        <p>
          <button onClick={fetchPostsHandler} className="btn btn-primary">
            Загрузить
          </button>
        </p>
      </>
    );
  }

  return posts.map((post, index) => <Post post={post} key={index} />);
};

export default FetchedPosts;
