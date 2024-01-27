import React, {useEffect, useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import AppWidgetSummary from "./AppWidgetSummary";
import Box from "@mui/material/Box";
import HomeService from "../../../../Services/HomeService";

const DashboardBody=()=>{

    const [users,setUsers]=useState(0);
    const [categories,setCategories]=useState(0);
    const [brands,setBrands]=useState(0);
    const [items,setItems]=useState(0);
    const [orders,setOrders]=useState(0);
    const [income,setIncome]=useState(0);

    useEffect(()=>{
        handleCount()
    },[])

    const handleCount=async ()=>{
        const user = await HomeService.getAllUser();
        setUsers(user.data.length)
        const category = await HomeService.fetchCategory();
        setCategories(category.data.length)
        const brand = await HomeService.fetchBrand();
        setBrands(brand.data.length)
        const items = await HomeService.fetchItems("All");
        setItems(items.data.length)
        const orders = await HomeService.getAllPayments();
        setOrders(orders.data.length)
        var total = 0;
        for (let dataKey of orders.data) {
            total+=dataKey.payments
        }
        setIncome(total)
    }

    return(
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <Toolbar />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary count={users} title="Users" total={714000} color="secondary" icon={'mdi:account'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary count={categories} title="Categories" total={1352831} color="info" icon={'material-symbols:category'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary count={brands} title="Brands" total={1723315} color="warning" icon={'healthicons:award-trophy'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3} className='mb-4'>
                    <AppWidgetSummary count={items} title="Products" total={234} color="error" icon={'solar:cart-bold'} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary count={orders} title="Orders" total={714000} color='success' icon={'mdi:cart'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary count={"Rs."+income} title="Income" total={1352831} color="primary" icon={'solar:dollar-bold'}/>
                </Grid>
            </Grid>
        </Box>
    )
}
export default DashboardBody;