import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  title: {
    fontWeight: 300,
    fontFamily: 'Roboto'
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
    error: null
  })

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value })
  }

  const onLogin = (e) => {
    e.preventDefault()
    console.log('login')
  }

  return (
    <div>
      <h2 className={classes.title}>Login</h2>
      <form onSubmit={onLogin}>
        <TextField
          id="email"
          label="Email"
          type="email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
          margin="normal"
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          className={classes.textField}
          value={values.password}
          onChange={handleChange('password')}
          margin="normal"
        />
        <br />
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Login
        </Button>
        {values.error && <p>{values.error.message}</p>}
      </form>
    </div>
  )
}

export default Login
