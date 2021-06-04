import React from 'react';
import ArticleCard from './ArticleCard'

function ListArticles(props) {
  return(
    <li style= { {listStyle: "none"} }>
      {props.article.map((article, index) => {
        return (
          <ArticleCard 
            key={index}
            title={article.title}
            author={article.author}
            url={article.url}

          />
        )
      })}
    </li>
  )
}

export default ListArticles