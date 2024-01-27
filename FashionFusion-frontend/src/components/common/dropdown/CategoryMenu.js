import React, {useEffect, useState} from "react";
import { useHistory,withRouter } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import vegetables from "../../../assets/images/icons8-vegetables-35.png";
import Divider from "@mui/material/Divider";
import fruits from "../../../assets/images/icons8-fish-35.png";
import beverages from "../../../assets/images/icons8-beverages-35.png";
import milk from "../../../assets/images/icons8-milk-35.png";
import spices from "../../../assets/images/icons8-biscuits-35.png";
import meats from "../../../assets/images/icons8-steak-35.png";
import fish from "../../../assets/images/icons8-fish-35.png";
import backed from "../../../assets/images/icons8-baked-35.png";
import fastFoods from "../../../assets/images/icons8-biscuits-35.png";
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
                handleLoadProducts("Vegetables")
            }}>
                <ListItemIcon style={{cursor:'pointer'}}>
                    <img src={vegetables} alt="vegetables" className="navImage"/>
                </ListItemIcon>
                Vegetables
            </MenuItem>
            <Divider />
            <MenuItem onClick={()=>{
                props.handleClose()
                handleLoadProducts("Fruits")
            }}>
                <ListItemIcon style={{cursor:'pointer'}}>
                    <img src={fruits} alt="fruits" className="navImage"/>
                </ListItemIcon>
                Fruits
            </MenuItem>
            <Divider />
            <MenuItem  onClick={()=>{
                props.handleClose()
                handleLoadProducts("Soft Drinks")
            }}>
                <ListItemIcon style={{cursor:'pointer'}}>
                    <img src={beverages} alt="beverages" className="navImage"/>
                </ListItemIcon>
                Beverages
            </MenuItem>
            <Divider />
            <MenuItem  onClick={()=>{
                props.handleClose()
                handleLoadProducts("Milk")
            }}>
                <ListItemIcon style={{cursor:'pointer'}} >
                    <img src={milk} alt="milk" className="navImage"/>
                </ListItemIcon>
                Milk
            </MenuItem>
            <Divider />
            <MenuItem  onClick={()=>{
                props.handleClose()
                handleLoadProducts("Spices")
            }}>
                <ListItemIcon style={{cursor:'pointer'}} >
                    <img src={spices} alt="spices" className="navImage"/>
                </ListItemIcon>
                Spices
            </MenuItem>
            <Divider />
            <MenuItem onClick={()=>{
                props.handleClose()
                handleLoadProducts("Meats")
            }}>
                <ListItemIcon style={{cursor:'pointer'}}>
                    <img src={meats} alt="meats" className="navImage"/>
                </ListItemIcon>
                Meats
            </MenuItem>
            <Divider />
            <MenuItem  onClick={()=>{
                props.handleClose()
                handleLoadProducts("Sea Foods")
            }}>
                <ListItemIcon style={{cursor:'pointer'}} >
                    <img src={fish} alt="sea foods" className="navImage"/>
                </ListItemIcon>
                Sea Foods
            </MenuItem>
            <Divider />
            <MenuItem onClick={()=>{
                props.handleClose()
                handleLoadProducts("Baked Products")
            }}>
                <ListItemIcon style={{cursor:'pointer'}} >
                    <img src={backed} alt="backed" className="navImage"/>
                </ListItemIcon>
                Baked Products
            </MenuItem>
            <Divider />
            <MenuItem onClick={()=>{
                props.handleClose()
                handleLoadProducts("Fast Foods")
            }}>
                <ListItemIcon style={{cursor:'pointer'}} >
                    <img src={fastFoods} alt="fast foods" className="navImage"/>
                </ListItemIcon>
                Fast Foods
            </MenuItem>
        </Menu>
    )
}

export  default CategoryMenu;