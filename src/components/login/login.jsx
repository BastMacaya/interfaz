import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import { Grid, makeStyles, Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Paper,Typography} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from "react";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://transmoneda.cl/wp-content/uploads/2019/04/cropped-Home_002-copy.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'left',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const classes = useStyles();
  const [Credenciales, setCredenciales] = useState({username: '', password:''})

  const onChange = e => {
      const{name,value} = e.target
      setCredenciales({
          ...Credenciales,
          [name]: value
      })
  }

    const submit = () => {
        try {
            axios.post('')
        } catch (error) {
            
        }
    };
/*  const Logear = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    axios.post()
    


    dispatch({
      type: types.login,
      payload: {
        token: "Bastian",
      },
    });
    navigate(lastPath);
  }; */

  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="UserName"
            name="username"
            autoFocus
            autoComplete="off"
            onChange={onChange}
            value={Credenciales.username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="off"
            onChange={onChange}
            value={Credenciales.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
            
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  </Grid>
  );
};
