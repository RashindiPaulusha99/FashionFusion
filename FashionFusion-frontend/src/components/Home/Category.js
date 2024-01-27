import React, {Fragment, useEffect, useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeService from "../../Services/HomeService";
import Blouse from "../../assets/images/fashion/icons8-blouse-top-35.png";
import Frock from "../../assets/images/fashion/icons8-blouse-35 (1).png";
import Trouser from "../../assets/images/fashion/icons8-trousers-35.png";
import UnderWear from "../../assets/images/fashion/icons8-panties-35.png";
import Skirt from "../../assets/images/fashion/icons8-skirt-35.png";
import Shirt from "../../assets/images/fashion/icons8-clothes-35.png";
import Accessories from "../../assets/images/fashion/icons8-accessories-35.png";

const Category=()=>{

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetchDetails();
    }, []);

    const fetchDetails = async()=>{
        const response = await HomeService.fetchCategory();

        if (response.status === 200){
            setPosts(response.data);
        }

    }

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(

    <section className="py-5 overflow-hidden">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">

                    <div className="section-header d-flex justify-content-between mb-5">
                        <h2 className="section-title">Category</h2>

                        <div className="d-flex align-items-center">
                            <a className="btn-link text-decoration-none">View All Categories →</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    <div className="category-carousel swiper">
                        <div className="swiper-wrapper">
                            <Carousel responsive={responsive}>
                                {/*{posts.map(({_id, category,image}, index) =>(
                                    <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                        <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image.data.data)} alt='icon-bread-baguette'/>
                                        <h3 className="category-title">{category}</h3>
                                    </a>
                                ))}*/}
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={Trouser} alt='icon-bread-baguette'/>
                                    <h3 className="category-title">Trouser</h3>
                                </a>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={Shirt} alt='icon-bread-baguette'/>
                                    <h3 className="category-title">Shirt</h3>
                                </a>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={Blouse} alt='icon-bread-baguette'/>
                                    <h3 className="category-title">Blouse</h3>
                                </a>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={Skirt} alt='icon-bread-baguette'/>
                                    <h3 className="category-title">Skirt</h3>
                                </a>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={Frock} alt='icon-bread-baguette'/>
                                    <h3 className="category-title">Frock</h3>
                                </a>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={UnderWear} alt='icon-bread-baguette'/>
                                    <h3 className="category-title">Underwear</h3>
                                </a>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={Accessories} alt='icon-bread-baguette'/>
                                    <h3 className="category-title">Accessories</h3>
                                </a>
                            </Carousel>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Category;