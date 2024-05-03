import React,{Fragment,useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import image from '../assets/images/fashion/ShopEx-image.jpg';
import {useHistory} from "react-router-dom";
import UserService from "../Services/UserService";
import SnackBar from "../components/common/alert/SnackBar";
import { useSelector, useDispatch } from 'react-redux';
import { login_Actions } from '../store/action/login_action';

const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? 'white' : 'white',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const Login=()=>{

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showErrorEmail, setShowErrorEmail] = React.useState(false);
    const [showErrorPassword, setShowErrorPassword] = React.useState(false);
    const [state, setState] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('All fields are required!');
    const dispatch = useDispatch();

    const handleClick = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };

    const history = useHistory();

    const handleLogin=async ()=>{
        if (email === '' && password === ''){
            setShowErrorEmail(true)
            setShowErrorPassword(true)
        }else if (email === ''){
            setShowErrorEmail(true)
            setShowErrorPassword(false)
        }else if (password === ''){
            setShowErrorPassword(true)
            setShowErrorEmail(false)
        }else {
            const  response = await UserService.userLogin(email,password);

            if (response.status === 200 && response.data !== null){

                // dispatch(login_Actions.login({ id: response.data._id }));

                localStorage.setItem("userId",response.data._id)

                if (response.data.role === "USER"){
                    setSeverity("success")
                    setMessage("Logged Successfully!")
                    handleClick()

                    history.push({
                        pathname:'/home'
                    });
                }else if (response.data.role === "OWNER" || response.data.role === "ADMIN"){
                    setSeverity("success")
                    setMessage("Logged Successfully!")
                    handleClick()

                    history.push({
                        pathname:'/dashboard'
                    });
                }

            }else {
                setSeverity("error")
                setMessage("Invalid Email or Password!")
                handleClick()
                setShowErrorEmail(false)
                setShowErrorPassword(false)
            }
        }
    }

    const handleRegister=()=>{
        history.push({
            pathname:'/register'
        });
    }

    return(
        <Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} lg={6} style={{height:'100vh',}}>
                        <div style={{padding:13,width:'86%',height:'84vh',position:"relative",top:98,bottom:0,left:0,right:0,margin:"auto"}}>
                            <Typography variant="h4" gutterBottom style={{color:'black',fontWeight:"bold",textAlign:"start",fontSize:'2rem',lineHeight:1.2,fontFamily:'Plus Jakarta Sans", sans-serif'}}>
                                Welcome to FashionFusion
                            </Typography>
                            <p
                                style={{
                                    fontSize:'0.875rem',
                                    color:'rgb(108, 115, 127)0',
                                    fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
                                    textAlign:"start"
                                }}>Please sign in to continue!</p>
                            <RedditTextField
                                label="Email"
                                id="reddit-input-email"
                                variant="filled"
                                size='small'
                                type='email'
                                fullWidth
                                style={{ marginTop: 20 }}
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                            />
                            {showErrorEmail && (
                                <FormHelperText error>
                                    Incorrect entry!
                                </FormHelperText>
                            )}
                            <RedditTextField
                                label="Password"
                                id="reddit-input-password"
                                variant="filled"
                                size='small'
                                type='password'
                                fullWidth
                                style={{ marginTop: 20 }}
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                            />
                            {showErrorPassword && (
                                <FormHelperText error>
                                    Incorrect entry!
                                </FormHelperText>
                            )}
                            <Button variant="contained" size="large" fullWidth style={{ marginTop: 30,backgroundColor:'black' }} onClick={handleLogin}>
                                Sign in
                            </Button>
                            <p style={{marginTop: 20 ,fontSize:'0.875rem',color:'rgb(108, 115, 127)0',fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',textAlign:"center"}}>Don't have an account?<Link style={{cursor:'pointer'}} underline="none" onClick={handleRegister}>
                                {'  Register'}
                            </Link></p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} style={{height:'100vh'}}>
                        <img src={image} alt='bgImage' style={{width:'100%',height:'100vh'}}/>
                    </Grid>
                </Grid>
            </Box>
            <SnackBar state={state} handleClose={handleClose} message={message} severity={severity}/>
        </Fragment>
    )
}

export default Login;