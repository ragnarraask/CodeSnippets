import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { hopscotch as theme } from 'react-syntax-highlighter/dist/styles/prism'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import CircularProgress from '@material-ui/core/CircularProgress'
import SnippetTags from './SnippetTags'
import CopyToClipboard from 'react-copy-to-clipboard'
import SnippetModal from './SnippetModal'

import Icon from '@material-ui/core/Icon'
import { Divider } from '@material-ui/core'

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flexGrow: 1
  }
})

const editorStyle = {
  fontSize: 12,
  margin: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  height: 100,
  overflow: 'hidden'
}

class Snipper extends Component {
  constructor() {
    super()

    this.state = {
      snippets: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch(
      'http://192.168.1.124:8080/api/collections/get/snippets?token=84588594ba67fc351bd6d464bb6b3a'
    )
      .then(response => response.json())
      .then(data => this.setState({ snippets: data.entries, isLoading: false }))
  }

  render() {
    const { snippets, isLoading } = this.state
    const { classes } = this.props

    if (isLoading) {
      return <CircularProgress />
    }
    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        {/* End hero unit */}
        <Grid container spacing={40}>
          {snippets.map(snippet => (
            <Grid item key={snippet} sm={12} md={6} lg={4}>
              <Card className={classes.card}>
                <SyntaxHighlighter
                  language={snippet.language}
                  customStyle={editorStyle}
                  style={theme}
                >
                  {snippet.snippet}
                </SyntaxHighlighter>
                <Divider />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {snippet.name}
                  </Typography>
                  <Typography>
                    {snippet.description}
                    <SnippetTags tags={snippet.tags} />
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                  <CopyToClipboard text={snippet.snippet}>
                    <Button size="small" color="primary" variant="outlined">
                      <Icon>file_copy</Icon>
                      Copy
                    </Button>
                  </CopyToClipboard>
                  <SnippetModal snippet={snippet}/>
                  <Button size="small"  variant="outlined" color="secondary">
                    Edit
                  </Button>

                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Snipper)
