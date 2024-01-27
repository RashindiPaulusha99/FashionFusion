import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import address from "../../assets/images/blogs/1053163.png";
import mail from "../../assets/images/blogs/1057057.png";
import mobile from "../../assets/images/blogs/1062231.png";
import {Form, FormGroup, Input, Label} from "reactstrap";
import Button from "@mui/material/Button";

const ContactForm=()=>{

    return(
        <div className='mb-5' style={{display:"flex",justifyContent:"center",flexDirection:"column",padding:21,boxShadow:'0 1px 10px rgba(75,90,130,.1)',borderRadius:'0.375rem'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} style={{display:"flex",justifyContent:'center'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={12} style={{display:"flex",justifyContent:'center'}}>
                                <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",boxShadow:'rgba(75, 90, 130, 0.1) 0px 1px 10px',width:350}}>
                                    <div className="me-3 ms-2" >
                                        <img src={address} alt='address' style={{width:75,position:'relative',left:0,right:0,margin:'auto',display:'block',paddingTop:7}}/>
                                        <h4 className="category-title" style={{color:'black',textAlign:'center',}}>Address</h4>
                                        <p style={{textAlign:'center',}}>730 Glenstone Ave 65802, Springfield, US</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} style={{display:"flex",justifyContent:'center'}}>
                                <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",boxShadow:'rgba(75, 90, 130, 0.1) 0px 1px 10px',width:350}}>
                                    <div className="me-3 ms-2" >
                                        <img src={mobile} alt='mobile' style={{width:75,position:'relative',left:0,right:0,margin:'auto',display:'block',paddingTop:7}}/>
                                        <h4 className="category-title" style={{color:'black',textAlign:'center',}}>Mobile</h4>
                                        <p style={{textAlign:'center',}}>+123 123 654</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} style={{display:"flex",justifyContent:'center'}}>
                                <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",boxShadow:'rgba(75, 90, 130, 0.1) 0px 1px 10px',width:350}}>
                                    <div className="me-3 ms-2" >
                                        <img src={mail} alt='mail' style={{width:75,position:'relative',left:0,right:0,margin:'auto',display:'block',paddingTop:7}}/>
                                        <h4 className="category-title" style={{color:'black',textAlign:'center',}}>Mail</h4>
                                        <p style={{textAlign:'center',}}>contact@gmail.com</p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} md={6} lg={6}>
                        <Form style={{marginLeft:30,marginRight:30}}>
                            <FormGroup>
                                <Label for="name">Full Name</Label>
                                <Input size="lg" id="name" name="name" type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input size="lg" id="email" name="email" type="email"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">Phone</Label>
                                <Input size="lg" id="phone" name="phone" type="tel"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="message">Message</Label>
                                <Input size="lg" id="message" name="message" type="textarea"/>
                            </FormGroup>
                            <Button size='large' fullWidth variant="contained" style={{backgroundColor:'black'}}>Submit</Button>
                        </Form>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ContactForm;