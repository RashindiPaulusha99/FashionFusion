import React from "react";

const MiddleBanners=()=>{

    return(
        <section className="py-5">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6">
                        <div className="banner-ad bg-danger banner-ad-image3" >
                            <div className="banner-content p-5">

                                <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                                <h3 className="banner-title">Discover Perfect Pants</h3>
                                <p>Elevate Your Wardrobe with Style and Comfort.</p>
                                <a href="#" className="btn btn-dark text-uppercase">Show Now</a>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-ad bg-info banner-ad-image4" >
                            <div className="banner-content p-5">

                                <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                                <h3 className="banner-title">Experience Comfort and Style</h3>
                                <p>Explore our Range of Leggings Today.</p>
                                <a href="#" className="btn btn-dark text-uppercase">Show Now</a>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MiddleBanners;