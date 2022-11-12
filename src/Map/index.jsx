import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import useStyles from './styles'


const bootstrapURLKeys = {
  key: ''
}

const googleMapCoords = {
  lat: 1,
  lng: 1,
}

const Map = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width: 600px)')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact bootstrapURLKeys={bootstrapURLKeys}
        defaultCenter={googleMapCoords}
        center={googleMapCoords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={() => {}}
        onChildClick={() => {}}
      >

      </GoogleMapReact>
    </div>
  )
}


export default Map
