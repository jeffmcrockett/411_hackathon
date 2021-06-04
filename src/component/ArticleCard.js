import React, { useState } from 'react';

function ArticleCard(props) {
  const { title, author, url } = props;

  return(
    <li style={ {listStyle: "none"} }>
      <div>
        <h2>{ title }</h2>
        <h3>{ author }</h3>
        <p>{ url }</p>
      </div>
    </li>
  )
}

export default ArticleCard