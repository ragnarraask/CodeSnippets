import React from 'react'
import Link from '@material-ui/core/Link'

const SnippetTags = props => {
  const { tags = [] } = props
  if(tags.length === 0){
      return ""
  }
  return (
    <ul>
      {tags.map((tag, id) => (
        <li key={id}>
          <Link to="{tag}">{tag}</Link>
        </li>
      ))}
    </ul>
  )
}
export default SnippetTags
