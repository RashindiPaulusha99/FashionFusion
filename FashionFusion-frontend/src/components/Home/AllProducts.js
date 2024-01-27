import React,{useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HomeService from "../../Services/HomeService";
import Slide from '@mui/material/Slide';
import ModalCart from "../common/model/ModalCart";
import {useSelector} from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AllProducts=(props)=>{

    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState('All');
    const [showNextButton, setShowNextButton] = useState(true);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const [itemsToShow, setItemsToShow] = useState(10);
    const userData = useSelector((state) => state.login.isLogged);


    useEffect(()=>{
        fetchDetails();
    }, []);

    const handleClickOpen =async (e) => {
        setId(e)
        setOpen(true);
      };

    const handleClose = () => {
        setId("")
        setOpen(false);
    };

    const fetchDetails = async()=>{
        const response = await HomeService.fetchItems(status);

        if (response.status === 200){
            setPosts([...response.data]);
        }
    }

    const handleNextButton = (event, value) => {
        setItemsToShow((prevItemsToShow) => prevItemsToShow + 10);
    };

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return(
        <section className="py-5">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12">

                        <div className="bootstrap-tabs product-tabs">
                            <div className="tabs-header d-flex justify-content-between my-5">
                                <h3>All Products</h3>
                                <div className="d-flex align-items-center">
                                    <a className="btn-link text-decoration-none">View All Categories →</a>
                                </div>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-all" role="tabpanel"
                                     aria-labelledby="nav-all-tab">

                                    <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                                    <Box sx={{ flexGrow: 1 }} >
                                        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} >
                                            {posts.slice(0, itemsToShow).map(({_id,image,name,unit_of_volume,unit_price,volume}, index) =>(
                                                <Grid item xs={4} lg={2.4} md={2.4}  key={index} >
                                                    <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(_id)}>
                                                        <div className="product-item">
                                                            
                                                            <figure>
                                                                <a title="Product Title">
                                                                    <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image.data.data)} alt='thumb bananas' className="tab-image"/>
                                                                </a>
                                                            </figure>
                                                            <h3>{name}</h3>
                                                            <span className="qty">{volume+" "+unit_of_volume}</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                            <span className="price">{"Rs "+unit_price+".00"}</span>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                               
                                                                <a className="btn-wishlist">
                                                                    <svg width="24" height="24">
                                                                        <use xlinkHref="#plus"></use>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>

                                    </div>
                                    <div className="swiper-buttons paginate">
                                        {itemsToShow < posts.length && (<Button variant="contained" size="medium" onClick={handleNextButton} disabled={!showNextButton} style={{backgroundColor:'black'}}>
                                            load more
                                        </Button>)}
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {open ? <ModalCart open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} id={id} Transition={Transition} /> : null}
        </section>
    )
}

export default AllProducts;