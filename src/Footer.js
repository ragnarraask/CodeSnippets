import React from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6
    }
})

const Footer = props => (
    <footer className={props.classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            React BootCamp
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Building cool stuff!
        </Typography>
    </footer>
)
export default withStyles(styles)(Footer)