import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import List from "@mui/material/List";

const DrawerList=(props)=>{

    return(
        <List>
            <ListItem  >
                <ListItemButton style={{backgroundColor:props.clickedColour === 'dashboard' ? 'gainsboro' : 'white'}} onClick={()=>{
                    props.handleClick('dashboard')
                }}>
                    <ListItemIcon>
                        <LeaderboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton style={{backgroundColor:props.clickedColour === 'user' ? 'gainsboro' : 'white'}} onClick={()=>{
                    props.handleClick('user')
                }}>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary='User' />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton style={{backgroundColor:props.clickedColour === 'category' ? 'gainsboro' : 'white'}} onClick={()=>{
                    props.handleClick('category')
                }}>
                    <ListItemIcon>
                        <CategoryIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Category' />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton style={{backgroundColor:props.clickedColour === 'brand' ? 'gainsboro' : 'white'}} onClick={()=>{
                    props.handleClick('brand')
                }}>
                    <ListItemIcon>
                        <EmojiEventsIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Brand' />
                </ListItemButton>
            </ListItem>
            <ListItem >
                <ListItemButton style={{backgroundColor:props.clickedColour === 'product' ? 'gainsboro' : 'white'}} onClick={()=>{
                    props.handleClick('product')
                }}>
                    <ListItemIcon>
                        <ShoppingBagIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Product' />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default DrawerList;