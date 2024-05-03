import React,{Fragment,useEffect,useState} from "react";
import Header from "../layouts/home/Header";
import HeaderIcons from "../layouts/home/HeaderIcons";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from "../layouts/home/Footer";
import bgImage from '../assets/images/fashion/Top-Fashion-Bloggers-minimalist-modest-mom-blog-fashion-outfits-1.jpg'
import ceo from '../assets/images/blogs/CEO-Advantages.jpg'
import director from '../assets/images/blogs/Shutterstock_1361250623-2.jpg'
import manager from '../assets/images/blogs/office-manager-woman.jpg'
import bgImage1 from '../assets/images/fashion/9 Minimalist Style Fashion Bloggers You Should Know 001.jpg'
import bgImage2 from '../assets/images/fashion/frame-99.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import {Icon} from "@iconify/react";
import {Card} from "@mui/material";

const AboutPage=()=>{

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <Fragment>
            <Header/>
            <HeaderIcons/>
            <div style={{width:'100%',height:'30rem',marginBottom:30,backgroundImage:`url(${bgImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1 style={{color:'white',background:'rgba(0, 0, 0, 0.54)',width:300,height:100,display:'flex',justifyContent:"center",alignItems:"center",border:'6px solid white'}}>About Us</h1>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
                <h1 style={{textAlign:"center",fontWeight:"bold",color:'black',borderBottom:'3px solid',borderBottomColor:'black'}}>About Our Journey</h1>
            </div>
            <div style={{position:"relative",marginLeft:40,marginRight:40,marginTop:40}}>
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column",}}>
                    <p>Our journey began with a simple yet profound vision: 
                        to revolutionize the way people shop for clothing. Guided by a passion 
                        for innovation and a commitment to excellence, we embarked on a mission 
                        to create a virtual try-on experience that seamlessly merges technology
                         with fashion.
                    </p>
                    <br/>
                    <p>Since our inception, we have tirelessly pursued the perfect balance 
                        between cutting-edge technology and user-centric design. 
            
                        <strong>cutting-edge technology and user-centric design. </strong>
                        Through continuous research and development, we've refined our 
                        platform to offer unparalleled convenience and accuracy in virtual
                        garment visualization.
                    </p>
                    <p style={{marginBottom:40}}>Since our inception, we have tirelessly pursued the perfect balance between cutting-edge technology and user-centric design. Through continuous research and development, we've refined our platform to offer unparalleled convenience and accuracy in virtual garment visualization.
                    </p>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={6} style={{}}>
                                <img src={bgImage1} alt='image' style={{width:'100%',height:'100%'}}/>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <img src={bgImage2} alt='image' style={{width:'100%',height:'100%'}}/>
                            </Grid>
                        </Grid>
                    </Box>
                    <p style={{marginTop:40}}>At the heart of our journey lies a dedication to empowering our customers with confidence and convenience. With our virtual try-on solution, shoppers can explore a vast array of styles and sizes from the comfort of their own homes, eliminating the uncertainty and inconvenience of traditional fitting rooms.
                    </p>
                    <br/>
                    <p>As we continue on our journey, we remain steadfast in our commitment to innovation and customer satisfaction. With each new feature and enhancement, we strive to redefine the boundaries of online shopping, making it more immersive, interactive, and enjoyable than ever before.
                    </p>
                    <br/>
                    <p>Join us on this exciting journey as we shape the future of fashion retailing, one virtual fitting room experience at a time.
                    </p>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
                <h1 style={{textAlign:"center",fontWeight:"bold",color:'black',borderBottom:'3px solid',borderBottomColor:'black'}}>Meet Our Team</h1>
            </div>
            <div className="category-carousel swiper" style={{margin:60}}>
                <div className="swiper-wrapper">
                    <Carousel responsive={responsive}>

                        <Card style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',margin:20}} >
                            <CardMedia
                                component="img"
                                height="194"
                                image={ceo}
                                alt="ceo"
                            />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12} lg={12} >
                                        <Typography variant="button" display="block" gutterBottom color="text" style={{display:'flex',justifyContent:'center'}}>
                                            CEO
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            Mr. Daniel Jonson
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            +94 751882696
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions style={{display:'flex',justifyContent:'center'}}>
                                <IconButton aria-label="email">
                                    <AlternateEmailIcon />
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <FacebookOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="twitter">
                                    <Icon icon="entypo-social:linkedin" />
                                </IconButton>
                            </CardActions>

                        </Card>
                        <Card style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',margin:20}} >
                            <CardMedia
                                component="img"
                                height="194"
                                image={director}
                                alt="ceo"
                            />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12} lg={12} >
                                        <Typography variant="button" display="block" gutterBottom color="text" style={{display:'flex',justifyContent:'center'}}>
                                            Director
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            Mr. Justin Vendor
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            +94 775886214
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions style={{display:'flex',justifyContent:'center'}}>
                                <IconButton aria-label="email">
                                    <AlternateEmailIcon />
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <FacebookOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="twitter">
                                    <Icon icon="entypo-social:linkedin" />
                                </IconButton>
                            </CardActions>

                        </Card>
                        <Card style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',margin:20}} >
                            <CardMedia
                                component="img"
                                height="194"
                                image={manager}
                                alt="ceo"
                            />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12} lg={12} >
                                        <Typography variant="button" display="block" gutterBottom color="text" style={{display:'flex',justifyContent:'center'}}>
                                            Manager
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            Mrs. Mary Ann
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            +94 7125589647
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions style={{display:'flex',justifyContent:'center'}}>
                                <IconButton aria-label="email">
                                    <AlternateEmailIcon />
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <FacebookOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="twitter">
                                    <Icon icon="entypo-social:linkedin" />
                                </IconButton>
                            </CardActions>

                        </Card>
                        <Card style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',margin:20}} >
                            <CardMedia
                                component="img"
                                height="194"
                                image={ceo}
                                alt="ceo"
                            />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12} lg={12} >
                                        <Typography variant="button" display="block" gutterBottom color="text" style={{display:'flex',justifyContent:'center'}}>
                                            CEO
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            Mr. Daniel Jonson
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            +94 751882696
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions style={{display:'flex',justifyContent:'center'}}>
                                <IconButton aria-label="email">
                                    <AlternateEmailIcon />
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <FacebookOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="twitter">
                                    <Icon icon="entypo-social:linkedin" />
                                </IconButton>
                            </CardActions>

                        </Card>
                        <Card style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',margin:20}} >
                            <CardMedia
                                component="img"
                                height="194"
                                image={director}
                                alt="ceo"
                            />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12} lg={12} >
                                        <Typography variant="button" display="block" gutterBottom color="text" style={{display:'flex',justifyContent:'center'}}>
                                            Director
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            Mr. Justin Vendor
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            +94 775886214
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions style={{display:'flex',justifyContent:'center'}}>
                                <IconButton aria-label="email">
                                    <AlternateEmailIcon />
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <FacebookOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="twitter">
                                    <Icon icon="entypo-social:linkedin" />
                                </IconButton>
                            </CardActions>

                        </Card>
                        <Card style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',margin:20}} >
                            <CardMedia
                                component="img"
                                height="194"
                                image={manager}
                                alt="ceo"
                            />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12} lg={12} >
                                        <Typography variant="button" display="block" gutterBottom color="text" style={{display:'flex',justifyContent:'center'}}>
                                            Manager
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            Mrs. Mary Ann
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{display:'flex',justifyContent:'center'}}>
                                            +94 7125589647
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions style={{display:'flex',justifyContent:'center'}}>
                                <IconButton aria-label="email">
                                    <AlternateEmailIcon />
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <FacebookOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="twitter">
                                    <Icon icon="entypo-social:linkedin" />
                                </IconButton>
                            </CardActions>

                        </Card>

                    </Carousel>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default AboutPage;