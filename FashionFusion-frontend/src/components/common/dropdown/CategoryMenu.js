import React, {useEffect, useState} from "react";
import { useHistory,withRouter } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tshirt from "../../../assets/images/fashion/icons8-clothes-35.png";
import Divider from "@mui/material/Divider";
import trouser from "../../../assets/images/fashion/icons8-trousers-35.png";
import blouse from "../../../assets/images/fashion/icons8-blouse-top-35.png";
import frock from "../../../assets/images/fashion/icons8-blouse-35 (1).png";
import skirt from "../../../assets/images/fashion/icons8-skirt-35.png";
import underwear from "../../../assets/images/fashion/icons8-panties-35.png";
import accessories from "../../../assets/images/fashion/icons8-accessories-35.png";
import Menu from "@mui/material/Menu";

const  CategoryMenu=(props)=>{

    const [status, setStatus]=useState('')

    const history = useHistory();

    const handleLoadProducts=(status)=>{
        const temp={
            "status":status
        }
        console.log(temp)

        history.push({
            pathname:'/products',
            state: temp
        });
    }

    return(
        <Menu
            id="basic-menu"
            anchorEl={props.anchorEl}
            style={{width:216}}
            open={props.opens}
            onClose={props.handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={()=>{
                props.handleClose()
                handleLoadProducts("Tshirt")
            }}>
                <ListItemIcon style={{cursor:'pointer'}}>
                    <img src={Tshirt} alt="Tshirt" className="navImage"/>
                </ListItemIcon>
                Tshirt
            </MenuItem>
            <Divider />
            <MenuItem onClick={()=>{
                props.handleClose()
                handleLoadProducts("Trouser")
            }}>
                <ListItemIcon style={{cursor:'pointer'}}>
                    <img src={trouser} alt="Trouser" className="navImage"/>
                </ListItemIcon>
                Trouser
            </MenuItem>
            <Divider />
            <MenuItem  onClick={()=>{
                props.handleClose()
                handleLoadProducts("Blouse")
            }}>
                <ListItemIcon style={{cursor:'pointer'}}>
                    <img src={blouse} alt="Blouse" className="navImage"/>
                </ListItemIcon>
                Blouse
            </MenuItem>
            <Divider />
            <MenuItem  onClick={()=>{
                props.handleClose()
                handleLoadProducts("Flock")
            }}>
                <ListItemIcon style={{cursor:'pointer'}} >
                    <img src={frock} alt="frock" className="navImage"/>
                </ListItemIcon>
                Frock
            </MenuItem>
            <Divider />
            <MenuItem  onClick={()=>{
                props.handleClose()
                handleLoadProducts("Skirt")
            }}>
                <ListItemIcon style={{cursor:'pointer'}} >
                    <img src={skirt} alt="Skirt" className="navImage"/>
                </ListItemIcon>
                Skirt
            </MenuItem>
            <Divider />
            <MenuItem onClick={()=>{
                props.handleClose()
                handleLoadProducts("Underwear")
            }}>
                <ListItemIcon style={{cursor:'pointer'}}>
                    <img src={underwear} alt="Underwear" className="navImage"/>
                </ListItemIcon>
                Underwear
            </MenuItem>
            <Divider />
            <MenuItem  onClick={()=>{
                props.handleClose()
                handleLoadProducts("Accessories")
            }}>
                <ListItemIcon style={{cursor:'pointer'}} >
                    <img src={accessories} alt="accessories" className="navImage"/>
                </ListItemIcon>
                Accessories
            </MenuItem>
        </Menu>
    )
}

export  default CategoryMenu;