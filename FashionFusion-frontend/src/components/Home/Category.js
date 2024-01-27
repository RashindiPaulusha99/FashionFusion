import React, {Fragment, useEffect, useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeService from "../../Services/HomeService";

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
                                {posts.map(({_id, category,image}, index) =>(
                                    <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                        <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image.data.data)} alt='icon-bread-baguette'/>
                                        <h3 className="category-title">{category}</h3>
                                    </a>
                                ))}
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