import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const Form=()=>{

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return(
        <section className="py-5">
            <div className="container-fluid">

                <div className="bg-secondary py-5 my-5 rounded-5 bg-leaves-img-pattern">
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-6 p-5">
                                <div className="section-header">
                                    <h2 className="section-title display-4">Get <span className="text-primary">25% Discount</span> on
                                        your first purchase</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit
                                    massa posuere maecenas. At tellus ut nunc amet vel egestas.</p>
                            </div>
                            <div className="col-md-6 p-5">
                                <form>
                                    <div className="mb-3">
                                        <TextField fullWidth id="outlined-basic" type='text' label="Name" variant="outlined" placeholder="John"/>
                                    </div>
                                    <div className="mb-3">
                                        <TextField fullWidth id="outlined-basic" type='email' label="Email" variant="outlined" placeholder="abc@mail.com" />
                                    </div>
                                    <div className="form-check form-check-inline mb-3">
                                        <label className="form-check-label" id='subscribe' htmlFor="subscribe" style={{position:'relative',left:-34}}>
                                            <Checkbox {...label}/>
                                            Subscribe to the newsletter</label>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <Button size="large" variant="contained" type="button" sx={{backgroundColor:'black'}}>Submit</Button>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Form;