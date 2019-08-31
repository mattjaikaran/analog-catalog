import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    marginTop: 16
  },
}))

export default function DatePicker() {
  const classes = useStyles()

  return (
    <div noValidate>
      <TextField
        id="date"
        label="Date Bought"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  </div>
  )
}
