import React from "react";
import { Post } from "./Post";
import { connect } from "react-redux";

const Posts = ({ localPosts }) => {
  if (!localPosts.length) {
    return <p>Постов нет.</p>;
  }

  return localPosts.map((post, index) => <Post post={post} key={index} />);
};

const mapStateToProps = (state) => ({
  localPosts: state.posts.posts,
});

export default connect(mapStateToProps, null)(Posts);
