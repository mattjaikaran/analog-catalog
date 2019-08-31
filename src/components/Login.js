import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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
    marginTop: '1rem'
  }
}))

const Login = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <div>
      <TextField
        id="email"
        label="Email"
        className={classes.textField}
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
      />
      <br />
      <TextField
        id="password"
        label="Password"
        className={classes.textField}
        value={values.password}
        onChange={handleChange('password')}
        margin="normal"
      />
    <br />
    <Button variant="outlined" color="primary" className={classes.button}>
      Login
    </Button>
    </div>
  )
}

export default Login
