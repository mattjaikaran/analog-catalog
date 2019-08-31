import React from 'react'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import DatePicker from './DatePicker'

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
  button: {
    margin: theme.spacing(1),
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}))

export default function New() {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    artistName: '',
    albumName: '',
    releaseYear: '',
    albumRuntime: '',
    dateBought: '',
    lyrics: '',
    color: '',
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <form noValidate autoComplete="off">
      <div>
        <Grid className={classes.container}>
          <Grid item xs={12} md={3}>
            <TextField
              id="artist-name"
              label="Artist Name"
              className={classes.textField}
              value={values.artistName}
              onChange={handleChange('artistName')}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="album-name"
              label="Album Name"
              className={classes.textField}
              value={values.albumName}
              onChange={handleChange('albumName')}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="release-year"
              label="Release Year"
              className={classes.textField}
              value={values.releaseYear}
              onChange={handleChange('releaseYear')}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="album-runtime"
              label="Album Runtime"
              className={classes.textField}
              value={values.albumRuntime}
              onChange={handleChange('albumRuntime')}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <DatePicker />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="color"
              label="Color"
              className={classes.textField}
              value={values.color}
              onChange={handleChange('color')}
              margin="normal"
            />
          </Grid>
          <Grid item sm={12}>
            <Button variant="outlined" color="primary" className={classes.button}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}
