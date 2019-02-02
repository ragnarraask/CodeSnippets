import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { hopscotch as theme } from 'react-syntax-highlighter/dist/styles/prism'
import Icon from '@material-ui/core/Icon'
import { Divider } from '@material-ui/core'
import CopyToClipboard from 'react-copy-to-clipboard'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '75%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  }
})

const editorStyle = {}

class SnippetModal extends React.Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes, snippet } = this.props

    return (
      <div>
        <Button
          onClick={this.handleOpen}
          size="small"
          variant="outlined"
          color="primary"
        >
          View
        </Button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {snippet.name}
            </Typography>

            <Typography variant="subtitle1" id="simple-modal-description">
              {snippet.description}
            </Typography>
            <SyntaxHighlighter
              language={snippet.language}
              customStyle={editorStyle}
              style={theme}
            >
              {snippet.snippet}
            </SyntaxHighlighter>
            <CopyToClipboard text={snippet.snippet}>
                    <Button size="small" color="primary" variant="outlined">
                      <Icon>file_copy</Icon>
                      Copy
                    </Button>
                  </CopyToClipboard>
          </div>
        </Modal>
      </div>
    )
  }
}

SnippetModal.propTypes = {
  classes: PropTypes.object.isRequired,
  snippet: PropTypes.object.isRequired
}

export default withStyles(styles)(SnippetModal)
