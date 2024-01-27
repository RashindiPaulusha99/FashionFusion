import React, {useEffect, useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeService from "../../Services/HomeService";
import calvin from "../../assets/images/fashion/Calvin-Klein-Logo.png";
import VictoriaSecret from "../../assets/images/fashion/Victoria-Secret-Logo.png";
import Levis from "../../assets/images/fashion/levi_logo_4_82250bd000e1-mobile.jpg";
import Nike from "../../assets/images/fashion/Nike-Logo.png";
import HM from "../../assets/images/fashion/H&M-Logo.svg.png";
import Sanmar from "../../assets/images/fashion/sanmar-vector-logo.png";

const NewlyArrivedBrands=()=>{

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetchDetails();
    }, []);

    const fetchDetails = async()=>{
        const response = await HomeService.fetchBrand();

        if (response.status === 200){
            setPosts(response.data);
        }
    }


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return(
        <section className="py-5 overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="section-header d-flex justify-content-between mb-5">

                            <h2 className="section-title">Brands</h2>

                            <div className="d-flex align-items-center">
                                <a className="btn-link text-decoration-none">View All Categories →</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="brand-carousel swiper">
                            <div className="swiper-wrapper">

                                <Carousel responsive={responsive}>
                                    {/*{posts.map(({_id, brand,category,image}, index) =>(
                                        <div className="swiper-slide me-3 ms-2">
                                            <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image.data.data)} className="img-fluid rounded" alt="Card title"/>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body py-0">
                                                            <p className="text-muted mb-0 fw-bolder">{brand}</p>
                                                            <h5 className="card-title">{"best "+category+" you wish to get"}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}*/}
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={calvin} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0 fw-bolder">Calvin Klein</p>
                                                        <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={VictoriaSecret} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0 fw-bolder">Victoria Secret</p>
                                                        <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={Levis} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0 fw-bolder">Levis</p>
                                                        <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={Nike} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0 fw-bolder">Nike</p>
                                                        <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={HM} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0 fw-bolder">H&M</p>
                                                        <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={Sanmar} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0 fw-bolder">Sanmar</p>
                                                        <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewlyArrivedBrands;