import React from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import Header from './Header'
import Map from './Map'
import './App.css'


const gridStyles = {
  width: '100%'
}

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={gridStyles}>
        <Grid item xs={12} md={4}>
          List
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map />
        </Grid>
      </Grid>
    </>
  )
}

export default App
