import React, {useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import ReorderIcon from '@mui/icons-material/Reorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import fashionfusion from "../../assets/images/fashion/Camerino-virtuale-1024x885.jpg";
import CategoryMenu from "../../components/common/dropdown/CategoryMenu";
import ProfileMenu from "../../components/common/dropdown/ProfileMenu";
import HomeService from "../../Services/HomeService";
import {useSelector} from "react-redux";

const Header=(props)=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [cart, setCart] = useState(0);
    const [userId, setUserId] = useState('');

    const history = useHistory();

    useEffect(()=>{
        handleCartSize();
        setUserId(localStorage.getItem("userId"));
    })

    const opens = Boolean(anchorEl);
    const openProfileMenu = Boolean(anchorEl2);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickProfileMenu = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseProfileMenu = () => {
        setAnchorEl2(null);
    };

    const handleCart=()=>{
        history.push({
            pathname:'/cart'
        });
    }

    const  handleOpenHome=()=>{
        history.push({
            pathname:'/home'
        });
    }

    const  handleOpenAbout=()=>{
        history.push({
            pathname:'/about'
        });
    }

    const  handleOpenBlogs=()=>{
        history.push({
            pathname:'/blog'
        });
    }

    const  handleOpenServices=()=>{
        history.push({
            pathname:'/service'
        });
    }

    const  handleOpenTry=()=>{
        history.push({
            pathname:'/try'
        });
    }

    const  handleOpenContact=()=>{
        history.push({
            pathname:'/contact'
        });
    }

    const handleCartSize=async ()=>{
        const response = await HomeService.getCart(userId);
        if (response.status === 200){
            setCart(response.data.length)
        }
    }

    return(
        <header>
            <div className="container-fluid">
                <div className="row py-3 border-bottom">

                    <div className="col-sm-4 col-lg-3 text-center text-sm-start">
                        <div className="main-logo">
                            <a href="#" style={{textDecoration: 'none'}}>
                                <img src={fashionfusion} alt="logo" className="img-fluid" style={{height: 68}}/>
                                <h4 style={{display: 'inline',color: 'darkkhaki',fontFamily: 'monospace'}}>FashionFusion</h4>
                            </a>
                        </div>
                    </div>

                    {/*search bar in header*/}
                    <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
                        <div className="search-bar row bg-light p-2 my-2 rounded-4">
                            <div className="col-11">
                                <form id="search-form" className="text-center" action="" method="">
                                    <input type="text" className="form-control border-0 bg-transparent" placeholder="What are you looking..." />
                                </form>
                            </div>
                            <div className="col-1" style={{cursor: "pointer"}} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
                            </div>
                        </div>
                    </div>

                    {/*support in header*/}
                    <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">

                        <ul className="d-flex justify-content-end list-unstyled m-0">
                            <li style={{cursor: "pointer"}}>
                                <a className="rounded-circle bg-light p-2 mx-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#heart"></use></svg>
                                </a>
                            </li>
                            <li className="" onClick={handleCart} style={{cursor: "pointer"}}>
                                {cart !== 0 ? <span className="badge bg-primary rounded-pill" style={{position: "absolute",display: "flex"}}>{cart}</span> : null}
                                <a  className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#cart"></use></svg>
                                </a>
                            </li>
                            <li className="d-lg-none" style={{cursor: "pointer"}}>
                                <a  className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#search"></use></svg>
                                </a>
                            </li>
                            <li style={{cursor: "pointer"}} onClick={handleClickProfileMenu}>
                                <a  className="rounded-circle bg-light p-2 mx-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#user"></use></svg>
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>

                {/*header menu*/}
                <div className="container-fluid">
                    <div className="row py-3">
                        <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
                            <nav className="main-menu d-flex navbar navbar-expand-lg">

                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                                        aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                                    <div className="offcanvas-header justify-content-center">
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>

                                    <div className="offcanvas-body">
                                        
                                            <Button
                                                id="basic-button"
                                                style={{color:'black'}}
                                                aria-controls={opens ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={opens ? 'true' : undefined}
                                                onClick={handleClick}
                                                startIcon={<ReorderIcon />}
                                                endIcon={<KeyboardArrowDownIcon />}
                                            >
                                                Categories
                                            </Button>
                                            <CategoryMenu opens={opens} handleClose={handleClose} anchorEl={anchorEl} />
   
                                        <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                                            <li className="nav-item active nav" onClick={handleOpenHome}>
                                                <a className="nav-link" >Home</a>
                                            </li>
                                            <li className="nav-item dropdown nav" onClick={handleOpenAbout}>
                                                <a  className="nav-link">About Us</a>
                                            </li>
                                            <li className="nav-item dropdown nav" onClick={handleOpenTry}>
                                                <a  className="nav-link">Try On</a>
                                            </li>
                                            <li className="nav-item" onClick={handleOpenBlogs}>
                                                <a  className="nav-link nav">Blogs</a>
                                            </li>
                                            <li className="nav-item" onClick={handleOpenServices}>
                                                <a  className="nav-link nav">Services</a>
                                            </li>
                                            <li className="nav-item" onClick={handleOpenContact}>
                                                <a  className="nav-link nav">Contact Us</a>
                                            </li>
                                            
                                        </ul>

                                    </div>

                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
           <ProfileMenu openProfileMenu={openProfileMenu} anchorEl2={anchorEl2} handleCloseProfileMenu={handleCloseProfileMenu}/>
        </header>
    )
}

export default Header;