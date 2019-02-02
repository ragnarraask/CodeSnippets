import React from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const styles = theme => ({
    appBar: {
        position: 'relative'
      },
})

const Header = props => (
    <AppBar position="static" className={props.classes.appBar}>
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                Snippeter
            </Typography>
        </Toolbar>
    </AppBar>
)
export default withStyles(styles)(Header)