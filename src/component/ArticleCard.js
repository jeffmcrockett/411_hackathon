import React from 'react';
import moment from 'moment'

function ArticleCard(props) {
  const { title, author, url, created_at, comments, points } = props;
  let date = moment(created_at).format('DD MMM. YYYY')
  return(
    <li style={ {listStyle: "none"} }>
      <div class="articleHeader">
        <h2 class="title-container"><a class="title" href={ url } >{ title }</a></h2>
        <h3 class="author">by: { author }</h3>
        <a class="link" href={ url }>({ url })</a>
      </div>
      <div class="articleFooter">
        <p>{date} | {comments} Comments | {points} Points</p>
      </div>
    </li>
  )
}

export default ArticleCard