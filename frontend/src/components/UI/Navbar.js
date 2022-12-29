import React from 'react'

import { Toolbar, Box, Typography, CssBaseline, AppBar, IconButton } from '@material-ui/core'
import AssessmentIcon from '@material-ui/icons/Assessment';

const Navbar = () => {
  return (
    <Box sx={{
      display: 'flex',
    }} >
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <AssessmentIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            GA4 Data Analytics
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;