import React,{Fragment,useEffect,useState} from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import logo from '../assets/images/grocery.jpg'
import DashboardHeader from "../layouts/dashboard/DashboardHeader";
import DrawerList from "../components/dashboard/body/dashboard/DrawerList";
import DashboardBody from "../components/dashboard/body/dashboard/DashboardBody";
import UserBody from "../components/dashboard/body/user/UserBody";
import CategoryBody from "../components/dashboard/body/category/CategoryBody";
import BrandBody from "../components/dashboard/body/brand/BrandBody";
import ProductBody from "../components/dashboard/body/item/ProductBody";

const drawerWidth = 240;

const Dashboard=(props)=>{

    const [clickedColour, setClickedColour] = useState('dashboard');

    const handleClick=(type)=>{
        setClickedColour(type)
    }

    return(
        <Fragment>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                {/*header*/}
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,backgroundColor:'lightseagreen' }}
                >
                    <DashboardHeader />
                </AppBar>

                {/*side bar*/}
                <Drawer
                    variant="permanent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box'
                        },
                    }} >
                    <Toolbar />
                    <img src={logo} alt='logo' style={{width:50,height:50,position:'absolute',left:15,top:8}}/>
                    <Divider />
                    <DrawerList clickedColour={clickedColour} handleClick={handleClick}/>
                </Drawer>

                {/*body*/}
                {clickedColour === 'dashboard' ? <DashboardBody/> :
                    clickedColour === 'user' ? <UserBody/> :
                        clickedColour === 'category' ? <CategoryBody/> :
                            clickedColour === 'brand' ? <BrandBody/> :
                                clickedColour === 'product' ? <ProductBody/> :
                                    null
                }
            </Box>
        </Fragment>
    )
}

export default Dashboard;