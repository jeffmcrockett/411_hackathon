import React, { useState } from 'react';

function ArticleCard(props) {
  const { title, author, url } = props;

  return(
    <li style={ {listStyle: "none"} }>
      <div>
        <h2><a href={ url } style={ {textDecoration: "none", color: 'black'} }>{ title }</a></h2>
        <h3>{ author }</h3>
        <a href={ url }>{ url }</a>
      </div>
    </li>
  )
}

export default ArticleCard