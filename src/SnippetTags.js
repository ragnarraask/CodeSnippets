import React from 'react'
import Link from '@material-ui/core/Link'

const SnippetTags = props => {
  return (
      <ul>
        {props.tags.map(tag => (
          <li>
            <Link to="{tag}">{tag}</Link>
          </li>
        ))}
      </ul>
  )
}
export default SnippetTags


