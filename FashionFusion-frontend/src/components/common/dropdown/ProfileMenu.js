import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {useHistory} from "react-router-dom";

const ProfileMenu=(props)=>{

    const history = useHistory();

    const handleSignin=()=>{
        history.push({
            pathname:'/login'
        });
    }

    const handleProfile=()=>{
        history.push({
            pathname:'/profile'
        });
    }

    return(
        <Menu
            id="basic-menu"
            anchorEl={props.anchorEl2}
            open={props.openProfileMenu}
            onClose={props.handleCloseProfileMenu}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() =>{
                props.handleCloseProfileMenu()
                handleSignin()}}>
                Sign in
            </MenuItem>
            <MenuItem onClick={() =>{
                props.handleCloseProfileMenu()
                handleProfile()}}>
                My account
            </MenuItem>
            <MenuItem onClick={() =>{
                props.handleCloseProfileMenu()
                handleSignin()}}>
                Logout
            </MenuItem>
        </Menu>
    )
}

export default ProfileMenu;