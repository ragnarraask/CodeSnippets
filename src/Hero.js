import React from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper
      },
      heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 4}px`,
        paddingTop: `${theme.spacing.unit * 12}px`
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
})

const Hero = props => (
    <div className={props.classes.heroUnit}>
          <div className={props.classes.heroContent}>
            {/* <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              ReactJS Academy Hackaton!
            </Typography> */}
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              This is a simple code snippet collection app by  Martin/Ragnar/Paavel 👨‍💻
            </Typography>
            <div className={props.classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Add Snippet
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
)
export default withStyles(styles)(Hero)