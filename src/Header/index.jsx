import React from 'react'
// import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'


const Header = () => {
  const classes = useStyles()

  const inputBaseClasses = `${classes.inputRoot}, ${classes.inputInput}`

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          TravelAdvisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." className={inputBaseClasses} />
            </div>

        </Box>
      </Toolbar>
    </AppBar>
  )
}



export default Header
