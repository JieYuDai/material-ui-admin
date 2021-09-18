import React, { Component } from 'react'
import './login.scss'
import { TextField } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export function LoginForm() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Username" fullWidth />
      <TextField id="standard-basic" label="Password" type="password" fullWidth />
    </form>
  )
}

class Login extends Component {
  renderLoginForm () {
    return (
      <LoginForm/>
    )
  }
  render() {
    return (
      <div className="login-page">
        <div className="login-input-area">
          { this.renderLoginForm() }
        </div>
        {/*<Button variant="contained" color="primary" disableElevation onClick={ () => { this.gotoHome() } }>*/}
        {/*  Login*/}
        {/*</Button>*/}
      </div>
    )
  }
  gotoHome () {
    // console.log(this)
    this.props.history.push('/home')
  }
}

export default Login