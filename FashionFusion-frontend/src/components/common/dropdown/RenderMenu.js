import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import {useHistory} from "react-router-dom";

const RenderMenu=(props)=>{

    const history = useHistory();

    const handleOpenHome=()=>{
        history.push({
            pathname:'/home'
        });
    }

    const handleOpenLogin=()=>{
        history.push({
            pathname:'/login'
        });
    }

    return(
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={props.menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={props.isMenuOpen}
            onClose={props.handleMenuClose}
        >
            <MenuItem style={{fontSize:15,fontWeight:'bold'}} onClick={props.handleMenuClose}>{props.name}</MenuItem>
            <MenuItem style={{fontSize:12,fontWeight:'bold'}} onClick={props.handleMenuClose}>{props.email}</MenuItem>
            <Divider />
            <MenuItem onClick={(e)=>{
                props.handleMenuClose()
                handleOpenHome()
            }}>Home</MenuItem>
            <MenuItem onClick={props.handleMenuClose}>My account</MenuItem>
            <Divider />
            <MenuItem onClick={(e)=>{
                props.handleMenuClose()
                handleOpenLogin()
            }}>Logout</MenuItem>
        </Menu>
    )
}

export default RenderMenu;