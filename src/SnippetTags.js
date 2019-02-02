import React from 'react'
import Link from '@material-ui/core/Link'

const SnippetTags = props => {
  return (
      <ul>
        {props.tags.map((tag, id) => (
          <li key={id}>
            <Link to="{IDBCursortag}">{tag}</Link>
          </li>
        ))}
      </ul>
  )
}
export default SnippetTags


