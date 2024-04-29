import React,{Fragment,useState,useEffect} from "react";
import Header from "../layouts/home/Header";
import HeaderIcons from "../layouts/home/HeaderIcons";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Box from '@mui/material/Box';
import {useHistory, withRouter} from 'react-router-dom';
import Button from "@mui/material/Button";
import HomeService from "../Services/HomeService";
import ItemService from "../Services/ProductService";
import SnackBar from "../components/common/alert/SnackBar";
import {useSelector} from "react-redux";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'white',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Payment=(props)=>{

    const [expanded, setExpanded] = useState('panel1');
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [state, setState] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('All fields are required!');

    const history = useHistory();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(()=>{
        setTotal(props.location.state.total)
        setItems(props.location.state.items)
    })

    const handleClick = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };

    const handlePayNow=async ()=>{
        if (address === '' || city === '' || province === '' || postalcode === '' || fullName === '' || email === '' ||  mobile === '' || cardNumber === '' || cardHolderName === '' || securityCode === '' || expiryMonth === '' || expiryMonth === 'MM' || expiryYear === '' || expiryYear === 'YY'){
            setSeverity("warning")
            setMessage("All fields are required!")
            handleClick()
        }else {

            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();
            const hour = currentDate.getHours();
            const minute = currentDate.getMinutes();
            const second = currentDate.getSeconds();
            const formattedDate = `${day}-${month}-${year} ${hour}:${minute}:${second}`;

            const data = {
                "user_Id":localStorage.getItem("userId"),
                "cart":items,
                "payments":total,
                "paymentDateTime":formattedDate
            }

            const response  = await HomeService.savePayment(data);

            if (response.status === 200){
                setSeverity("success")
                setMessage("Payment Successfully!")
                handleClick()
                deductQty(response.data)
                deleteCart(response.data)
                history.push({
                    pathname:'/response'
                });
            }else {
                setSeverity("error")
                setMessage("Payment Failed!")
                handleClick()
                history.push({
                    pathname:'/login'
                });
            }
        }
    }

    const deleteCart=async (items)=>{
        for (var itemsKey of items.cart) {
            const response = await HomeService.deleteCart(itemsKey._id)
        }
    }

    const deductQty=async (items)=>{
        for (var itemsKey of items.cart) {
            const response = await ItemService.fetchItem(itemsKey.item_Id)
            const qty={
                "qty_on_hand":response.data.qty_on_hand - itemsKey.qty
            }
            const qtyOnHand = await ItemService.updateQty(itemsKey.item_Id,qty)
        }
    }

    return(
        <Fragment>
            <Header/>
            <HeaderIcons/>
            <div style={{width:'100%',padding:24}}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <IconButton aria-label="delete" size="large" style={{color:'darkkhaki',}}>
                            <HomeOutlinedIcon fontSize="inherit" />
                        </IconButton>
                        <Typography style={{fontWeight:"bold",position:'relative',top:15}}>Delivery Address</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch',flexWrap: 'wrap' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div className='row'>
                                <div className="col mb-2 w-50">
                                    <label style={{fontSize:14}} htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" value={address} onChange={(e)=>{
                                        setAddress(e.target.value)
                                    }}/>
                                </div>
                                <div className="col mb-2 w-50">
                                    <label style={{fontSize:14}} htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" value={city} onChange={(e)=>{
                                        setCity(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col mb-4 w-50">
                                    <label style={{fontSize:14}} htmlFor="province" className="form-label">Province</label>
                                    <input type="text" className="form-control" id="province" value={province} onChange={(e)=>{
                                        setProvince(e.target.value)
                                    }}/>
                                </div>
                                <div className="col mb-4 w-50">
                                    <label style={{fontSize:14}} htmlFor="postalcode" className="form-label">Postal Code</label>
                                    <input type="text" className="form-control" id="postalcode" value={postalcode} onChange={(e)=>{
                                        setPostalCode(e.target.value)
                                    }}/>
                                </div>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <IconButton aria-label="delete" size="large" style={{color:'darkkhaki',}}>
                            <CallOutlinedIcon fontSize="inherit" />
                        </IconButton>
                        <Typography style={{fontWeight:"bold",position:'relative',top:15}}>Contact Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div className='row'>
                                <div className="col mb-4 w-50">
                                    <label style={{fontSize:14}} htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="name" value={fullName} onChange={(e)=>{
                                        setFullName(e.target.value)
                                    }}/>
                                </div>
                                <div className="col mb-4 w-50">
                                    <label style={{fontSize:14}} htmlFor="contact" className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" id="contact" value={mobile} onChange={(e)=>{
                                        setMobile(e.target.value)
                                    }}/>
                                </div>
                                <div className="col mb-4 w-50">
                                    <label style={{fontSize:14}} htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}/>
                                </div>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <IconButton aria-label="delete" size="large" style={{color:'darkkhaki',}}>
                            <AttachMoneyOutlinedIcon fontSize="inherit" />
                        </IconButton>
                        <Typography style={{fontWeight:"bold",position:'relative',top:15}}>Payment Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div className='row'>
                                <div className="col col-lg-4 col-md-4 col-sm-12 mb-2 w-50">
                                    <label style={{fontSize:14}} htmlFor="cardnumber" className="form-label">Card Number</label>
                                    <input type="text" className="form-control" id="cardnumber" value={cardNumber} onChange={(e)=>{
                                        setCardNumber(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col col-lg-1 col-md-1 col-sm-6 mb-2 w-25">
                                    <label style={{fontSize:14}} htmlFor="month" className="form-label">Expiry Month</label>
                                    <select className="form-select col col-lg-1 col-md-1 col-sm-6" style={{width: '37%'}} aria-label="month" value={expiryMonth} onChange={(e)=>{
                                        setExpiryMonth(e.target.value)
                                    }}>
                                        <option selected>MM</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="col col-lg-1 col-md-1 col-sm-6 mb-2 w-25">
                                    <label style={{fontSize:14}} htmlFor="year" className="form-label">Expiry Year</label>
                                    <select className="form-select col col-lg-1 col-md-1 col-sm-6" style={{width: '37%'}} aria-label="year" value={expiryYear} onChange={(e)=>{
                                        setExpiryYear(e.target.value)
                                    }}>
                                        <option selected>YY</option>
                                        <option value="1">20</option>
                                        <option value="2">21</option>
                                        <option value="3">23</option>
                                        <option value="4">24</option>
                                        <option value="5">25</option>
                                        <option value="6">26</option>
                                        <option value="7">27</option>
                                        <option value="8">28</option>
                                        <option value="9">29</option>
                                        <option value="10">30</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col col-lg-4 col-md-4 col-sm-12 mb-2 w-25">
                                    <label style={{fontSize:14}} htmlFor="cardholderName" className="form-label">Cardholder Name</label>
                                    <input type="text" className="form-control" id="cardholderName" value={cardHolderName} onChange={(e)=>{
                                        setCardHolderName(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col col-lg-2 col-md-2 col-sm-12 mb-2 w-25">
                                    <label style={{fontSize:14}} htmlFor="code" className="form-label">Security code</label>
                                    <input type="text" style={{width: '37%'}} className="form-control" id="code" value={securityCode} onChange={(e)=>{
                                        setSecurityCode(e.target.value)
                                    }}/>
                                    <p style={{position:'absolute',bottom:10,left:150,fontSize:13}}>3 digits</p>
                                </div>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <IconButton aria-label="delete" size="large" style={{color:'darkkhaki',}}>
                            <AttachMoneyOutlinedIcon fontSize="inherit" />
                        </IconButton>
                        <Typography style={{fontWeight:"bold",position:'relative',top:15}}>Payment</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Typography style={{display:'flex',justifyContent:'flex-end',fontWeight:"bold",fontSize:20}}>TOTAL :  <span style={{color:'crimson'}}>{"Rs. "+total+".00"}</span></Typography>
                            <div style={{display:'flex',justifyContent:'flex-end',marginTop:10,}}>
                                <Button fullWidth size="medium" variant="contained" style={{width:200,backgroundColor:'lightseagreen'}} onClick={handlePayNow}>
                                    Pay Now
                                </Button>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <SnackBar state={state} handleClose={handleClose} message={message} severity={severity}/>

        </Fragment>
    )
}

export default withRouter(Payment);