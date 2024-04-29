import React, {useEffect, Fragment, useState} from "react";
import Header from "../layouts/home/Header";
import HeaderIcons from "../layouts/home/HeaderIcons";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import image from '../assets/images/fashion/63bf1f4387ee8107fe76236f_howitworks.png';
import { useLocation } from 'react-router-dom';
import HomeService from "../Services/HomeService";
import axios from 'axios';
import ReactDOM from 'react-dom';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


const TryOn=(props)=>{

    const location = useLocation();
    const { state } = location;

    const[itemImage,setItemImage]=useState('');
    const[categoryItem,setCategoryItem]=useState('');
    const[uploadImage,setUploadImage]=useState('');
    const[tryOnImage,setTryOnImage]=useState('');
    const[displayImage,setDisplayImage]=useState(false);

    const [isUILoaded, setIsUILoaded] = useState(false);

    // Data to be passed to the iframe
    // const imageUrl = state.image;
    // const category = state.category;

    // Constructing the URL with query parameters
    // const iframeUrl = `http://127.0.0.1:7860?imageUrl=${encodeURIComponent(imageUrl)}&category=${encodeURIComponent(category)}`;


    useEffect(()=>{
        // setItemImage(state.image)
        // setCategoryItem(state.category)
    },[])


    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        setTryOnImage(file);
        setUploadImage(URL.createObjectURL(file));
        setDisplayImage(true);

        const base64Image = await fileToBase64(file);
        console.log(itemImage)
        const data = new FormData();
        data.append('personImage', base64Image);

        const blob = new Blob([new Uint8Array(itemImage)], { type: 'image/jpeg' });
        data.append('clothImage', blob, 'image.jpg');

        // data.append('clothImage', test(itemImage));

        const options = {
            method: 'POST',
            url: 'https://virtual-try-on2.p.rapidapi.com/clothes-virtual-tryon',
            headers: {
                'X-RapidAPI-Key': '9cd612fd8cmsh915a608e19ca7b9p177afdjsn67d4a0b031d4',
                'X-RapidAPI-Host': 'virtual-try-on2.p.rapidapi.com'
            },
            data: data
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        // const base64Image = await fileToBase64(file);
        // const data={
        //     "personImage": base64Image,
        //     "clothImage":test(itemImage)
        // }
        //
        // console.log(data)
        //
        // const response = await HomeService.virtualTryOn(data);
        // console.log(response);
        //
        // if (response.status == 200){
        //     setDisplayImage(response.data);
        // }
        //
        // const reader = new FileReader();
        //
        // reader.readAsDataURL(file);

    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result.split(',')[1]); // Extract base64 part
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const test = (buffer) => {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    };

    const virtualTryOn=async (e)=>{

        console.log(e);

        const base64Image = test(itemImage);
        const data={
            "personImage": base64Image,
            "clothImage":itemImage
        }

        console.log(data)

        const response = await HomeService.virtualTryOn(data);
        console.log(response);

        if (response.status == 200){
            setDisplayImage(response.data);
        }
    }

    return(
        <Fragment>
            <Header/>
            <HeaderIcons/>
            <div style={{width:'100%',padding:24}}>
                <iframe src='http://127.0.0.1:7860' width="100%" height="500px" frameBorder="0"></iframe>
                {/*<Box sx={{ flexGrow: 1 }}>*/}
                {/*    <Grid container spacing={2}>*/}
                {/*        <Grid item xs={12} md={4} lg={4} >*/}
                {/*            /!*<Button onClick={handleTryOn}>Try On</Button>*!/*/}
                {/*            <div style={{width:'100%',height:'90%',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',borderRadius:10}}>*/}
                {/*                <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(itemImage)} alt='product' style={{width:'100%',height:'100%',padding:20}}/>*/}
                {/*            </div>*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={12} md={4} lg={4}>*/}
                {/*            <div style={{textAlign:'center',display:'flex',justifyContent:"space-evenly"}}>*/}
                {/*                <Button*/}
                {/*                    disabled*/}
                {/*                    component="label"*/}
                {/*                    style={{backgroundColor:'darkgrey',boxShadow:'none'}}*/}
                {/*                    role={undefined}*/}
                {/*                    variant="contained"*/}
                {/*                    tabIndex={-1}*/}
                {/*                    startIcon={<AddAPhotoIcon />}*/}
                {/*                >*/}
                {/*                    Take photo*/}
                {/*                    <VisuallyHiddenInput type="file" />*/}
                {/*                </Button>*/}
                {/*                <Button*/}
                {/*                    component="label"*/}
                {/*                    style={{backgroundColor:'darkgrey',boxShadow:'none'}}*/}
                {/*                    role={undefined}*/}
                {/*                    variant="contained"*/}
                {/*                    tabIndex={-1}*/}
                {/*                    onChange={handleFileUpload}*/}
                {/*                    startIcon={<CloudUploadIcon />}*/}
                {/*                >*/}
                {/*                    Upload image*/}
                {/*                    <VisuallyHiddenInput type="file" />*/}
                {/*                </Button>*/}
                {/*            </div>*/}
                {/*            <div style={{width:'100%',height:'90%',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',borderRadius:10}}>*/}
                {/*                {displayImage && <img src={uploadImage} alt='product' style={{width:'100%',height:'100%',padding:20}}/>}*/}
                {/*            </div>*/}
                {/*            <Grid item xs={12} md={3} lg={3} style={{position:"absolute",left:0,right:0,margin:'auto',textAlign:"center",paddingTop:20,paddingBottom:20}} >*/}
                {/*                <Button size='large' variant="contained" style={{backgroundColor:'darkkhaki'}} onChange={virtualTryOn}>Try On</Button>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={12} md={4} lg={4}>*/}
                {/*            <div style={{width:'100%',height:'90%',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',borderRadius:10}}>*/}
                {/*                <img src={displayImage} alt='product' style={{width:'100%',height:'100%',padding:20}}/>*/}
                {/*            </div>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Box>*/}
            </div>
        </Fragment>
    )
}

export default TryOn;