import React, {Fragment, useState} from "react";
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
import HomeService from "../Services/HomeService";
import SnackBar from "../components/common/alert/SnackBar";

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

const Register=()=>{

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [showErrorName, setShowErrorName] = useState(false);
    const [state, setState] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('All fields are required!');

    const handleClick = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };

    const history = useHistory();

    const handleRegister=async ()=>{
        if (email === '' && password === '' && name === ''){
            setShowErrorEmail(true)
            setShowErrorPassword(true)
            setShowErrorName(true)
        }else if (email === ''){
            setShowErrorEmail(true)
            setShowErrorPassword(false)
            setShowErrorName(false)
        }else if (password === '') {
            setShowErrorPassword(true)
            setShowErrorEmail(false)
            setShowErrorName(false)
        }else if (name === ''){
            setShowErrorName(true)
            setShowErrorEmail(false)
            setShowErrorPassword(false)
        }else {
            const currentDate = new Date();

            // Extract the date, month, and year from the current date
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
            const year = currentDate.getFullYear();

            // Format the date as a string in the desired format (e.g., DD/MM/YYYY)
            const formattedDate = `${day}-${month}-${year}`;

            const user={
                "name":name,
                "email":email,
                "password":password,
                "role":'USER',
                "addedDate":formattedDate
            }
            const response = await HomeService.saveUser(user)

            if (response.status === 200){
                setSeverity("success")
                setMessage("Registered Successfully!")
                handleClick()
                history.push({
                    pathname:'/login'
                });
            }else {
                setSeverity("error")
                setMessage("Registered Failed!")
                handleClick()
                setShowErrorEmail(false)
                setShowErrorPassword(false)
                setName(false)
            }
        }
    }

    const handleLogin=()=>{
        history.push({
            pathname:'/login'
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
                                }}>Please sign up to continue!</p>
                            <RedditTextField
                                label="Full Name"
                                id="reddit-input-name"
                                variant="filled"
                                size='small'
                                type='text'
                                fullWidth
                                style={{ marginTop: 20 }}
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }}
                            />
                            {showErrorName && (
                                <FormHelperText error>
                                    Incorrect entry!
                                </FormHelperText>
                            )}
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
                            <Button variant="contained" size="large" fullWidth style={{ marginTop: 30,backgroundColor:'black' }} onClick={handleRegister}>
                                Sign up
                            </Button>
                            <p
                                style={{
                                    marginTop: 20 ,
                                    fontSize:'0.875rem',
                                    color:'rgb(108, 115, 127)0',
                                    fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
                                    textAlign:"center"
                                }}>Already have an account?<Link underline="none" style={{cursor:'pointer'}} onClick={handleLogin}>
                                {'  Login'}
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

export default Register;