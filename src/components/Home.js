import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import Login from './Login'
import Register from './Register'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

const Home = () => {
  const classes = useStyles()
  const onSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <div>
      <Grid className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Login />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Register />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
