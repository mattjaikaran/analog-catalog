import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '1rem'
  },
}))

export default function View() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4} md={3}>
          <img className="vinylImg" src={'https://coloredvinylrecords.com/pictures/s/tn-samira-winter-supreme-blue-dream.png'} />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img className="vinylImg" src={'https://coloredvinylrecords.com/pictures/g/tn-godcollider-godcollider.png'} />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img className="vinylImg" src={'https://coloredvinylrecords.com/pictures/h/tn-hot-water-music-the-new-what-next.png'} />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img className="vinylImg" src={'https://coloredvinylrecords.com/pictures/t/tn-the-claypool-lennon-delirium-south-of-reality.png'} />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img className="vinylImg" src={'https://coloredvinylrecords.com/pictures/b/tn-bangladeafy-ribboncutter.png'} />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img className="vinylImg" src={'https://coloredvinylrecords.com/pictures/j/tn-john-calvin-abney-coyote.png'} />
        </Grid>
      </Grid>
    </div>
  )
}
