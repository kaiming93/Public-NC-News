import React from "react";
import Votes from "./Votes";
import { Link } from "@reach/router";
// import Article from "./Article";

function List({ articles, articleFilter }) {
  // console.log(articleFilter);
  return (
    <ul>
      {articles.reduce((acc, article) => {
        if (
          !articleFilter ||
          article.title.toLowerCase().includes(articleFilter.toLowerCase()) ||
          article.body.includes(articleFilter)
        ) {
          acc.push(
            <div key={article._id}>
              <Link to={`/${article._id}`}>
                <h2>{article.title}</h2>
                <p
                  // onClick={this.singleArticle}
                  className="articles"
                >
                  {article.body}
                </p>
              </Link>
              <p>by {article.created_by.name}</p>
              <p>Comment: {article.comment_count}</p>
              <Votes article={article} />
            </div>
          );
        }
        return acc;
      }, [])}
    </ul>
  );
}

export default List;
