import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 300,
    fontFamily: 'Roboto',
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <div>
      <h2 className={classes.title}>About</h2>
      <p className={classes.title}>
        Vinyl collection web application. Built with React
      </p>
    </div>
  )
}

export default About
