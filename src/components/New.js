import React, { useState } from 'react'
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import DatePicker from './DatePicker'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 300,
    fontFamily: 'Roboto'
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
  apiTitle: {
    fontWeight: 300,
    fontFamily: 'Roboto'
  },
  menu: {
    width: 200,
  },
}))

export default function New() {
  const classes = useStyles()
  const [values, setValues] = useState({
    artistName: '',
    albumName: '',
    releaseYear: '',
    albumRuntime: '',
    dateBought: '',
    color: '',
  })

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    const { artistName, albumName, releaseYear, albumRuntime, dateBought, color } = values
    const obj = {
      artistName,
      albumName,
      releaseYear,
      albumRuntime,
      dateBought,
      color
    }
    console.log(obj)
    {/* API POST request here */}

    setValues({
      artistName: '',
      albumName: '',
      releaseYear: '',
      albumRuntime: '',
      dateBought: '',
      color: '',
    })
  }

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <h2 className={classes.title}>
        New Vinyl
      </h2>
      <div>
        <Grid className={classes.container}>
          <Grid item sm={6}>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Date Bought"
                type="date"
                onChange={handleChange('dateBought')}
                value={values.dateBought}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="artist-name"
                label="Artist Name"
                className={classes.textField}
                value={values.artistName}
                onChange={handleChange('artistName')}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="album-name"
                label="Album Name"
                className={classes.textField}
                value={values.albumName}
                onChange={handleChange('albumName')}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="release-year"
                label="Release Year"
                className={classes.textField}
                value={values.releaseYear}
                onChange={handleChange('releaseYear')}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="album-runtime"
                label="Album Runtime"
                className={classes.textField}
                value={values.albumRuntime}
                onChange={handleChange('albumRuntime')}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
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
              <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <h3 className={classes.apiTitle}>Discogs API</h3>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}
