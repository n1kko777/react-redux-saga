import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost, showAlert } from "../redux/actions";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title, body } = this.state;

    if (!title.trim()) {
      return this.props.showAlert({
        type: "danger",
        message: "Заполните поле с заголовком.",
      });
    }

    const newPost = { title, body };

    this.props.addPost(newPost);

    this.setState({
      title: "",
      body: "",
    });
  };

  changeInputHandler = (e) => {
    e.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <h2>Новый пост</h2>
        <div className="form-group">
          <label htmlFor="title">Заголовок формы</label>
          <input
            placeholder="Какой-то заголовок..."
            onChange={this.changeInputHandler}
            className="form-control"
            value={title}
            name="title"
            type="text"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Описание</label>
          <textarea
            onChange={this.changeInputHandler}
            className="form-control"
            value={body}
            name="body"
            id="body"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success mt-2 mb-5">
          Создать
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addPost,
  showAlert,
};

export default connect(null, mapDispatchToProps)(PostForm);
