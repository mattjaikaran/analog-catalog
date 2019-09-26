import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { withFirebase } from '../firebase'
import { compose } from 'recompose'

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
  title: {
    fontWeight: 300,
    fontFamily: 'Roboto'
  },
  button: {
    marginTop: '1rem'
  }
}))

const Register = (props) => {
  const classes = useStyles()
  const [values, setValues] = useState({
    email: '',
    password: '',
    password2: '',
    error: null
  })

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value })
  }

  const onRegister = (e) => {
    e.preventDefault()
    const { email, password, error } = values
    props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        setValues({ ...values })
        this.props.history.push('/all')
      })
      .catch(error => setValues({ error: error }))
  }

  const isInvalid =
      values.password !== values.password2 ||
      values.password === '' ||
      values.email === '' ||
      values.username === '';

  return (
    <div>
      <h2 className={classes.title}>Register</h2>
      <form onSubmit={onRegister}>
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
          type="password"
          label="Password"
          className={classes.textField}
          value={values.password}
          onChange={handleChange('password')}
          margin="normal"
        />
        <br />
        <TextField
          id="password2"
          type="password"
          label="Password Confirmation"
          className={classes.textField}
          value={values.password2}
          onChange={handleChange('password2')}
          margin="normal"
        />
        <br />
        <Button disabled={isInvalid} type="submit" variant="outlined" color="primary" className={classes.button}>
          Register
        </Button>
        {values.error && <p className={classes.title}>{values.error.message}</p>}
      </form>
    </div>
  )
}

const RegisterFirebase = compose(
  withRouter,
  withFirebase
)(Register)

export default Register
export { RegisterFirebase }
