import React, { Component } from "react";
import "../App.css";
import * as api from "../api";

class ArticlePoster extends Component {
  state = {
    title: "",
    belongs_to: "",
    body: "",
    ArticleAdded: false
  };
  render() {
    return this.state.ArticleAdded ? (
      <h2>Your article has been added!</h2>
    ) : (
      <div className="container2">
        <form onSubmit={this.handleSubmit}>
          <div className="row2">
            <div class="col-75">
              <input
                name="title"
                id="title"
                placeholder="Title"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row2">
            <div className="col-75">
              <div className="select">
                <select
                  value={this.state.belongs_to}
                  onChange={this.handleChange2}
                >
                  <option>Select a Topic</option>
                  <option value="coding">Coding</option>
                  <option value="football">Football</option>
                  <option value="cooking">Cooking</option>
                </select>
              </div>
            </div>
            <div class="col-75">
              <textarea
                rows="10"
                name="comment"
                id="comment"
                onChange={this.handleChange3}
                placeholder="Write your article..."
              />
            </div>
          </div>
          <br />
          <div className="row2">
            <div className="col-75">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      title: value
    });
  };
  handleChange2 = event => {
    const value2 = event.target.value;
    this.setState({
      belongs_to: value2
    });
  };
  handleChange3 = event => {
    const value3 = event.target.value;
    this.setState({
      body: value3
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.addArticle(
      this.state.title,
      this.state.belongs_to,
      this.state.body,
      this.props.user
    );
    this.setState({
      ArticleAdded: true
    });
  };
  addArticle = (title, belongs_to, body, user) => {
    // this.props.user.id
    api.postArticle(title, belongs_to, body, user);
  };
}

export default ArticlePoster;