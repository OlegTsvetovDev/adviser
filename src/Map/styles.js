import { makeStyles } from '@material-ui/core'


export default makeStyles(() => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px',
  },
  mapContainer: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
  }
}))
