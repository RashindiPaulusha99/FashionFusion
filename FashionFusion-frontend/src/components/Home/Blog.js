import React from "react";
import postThumb1 from "../../assets/images/fashion/frame-99.jpg";
import postThumb2 from "../../assets/images/fashion/9 Minimalist Style Fashion Bloggers You Should Know 001.jpg";
import postThumb3 from "../../assets/images/fashion/viubox-746x620.jpg";
import postThumb4 from "../../assets/images/fashion/VTO.jpg";
import postThumb5 from "../../assets/images/fashion/Top-Fashion-Bloggers-minimalist-modest-mom-blog-fashion-outfits-1.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Blog=()=>{

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <section id="latest-blog" className="py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="section-header d-flex align-items-center justify-content-between my-5">
                        <h2 className="section-title">Our Recent Blog</h2>
                        <div className="btn-wrap align-right">
                            <a href="#g" className="d-flex align-items-center nav-link">Read All Articles <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Carousel responsive={responsive}>
                        <div className="col me-3 ms-2">
                            <article className="post-item card border-0 shadow-sm p-3">
                                <div className="image-holder zoom-effect">
                                    <a href="#">
                                        <img src={postThumb1} alt="post" className="card-img-top"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                                        <div className="meta-date"><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>22 Aug 2021</div>
                                        <div className="meta-categories"><svg width="16" height="16"><use xlinkHref="#category"></use></svg>tips & tricks</div>
                                    </div>
                                    <div className="post-header">
                                        <h3 className="post-title">
                                            <a href="#" className="text-decoration-none">Trendsetters' Corner</a>
                                        </h3>
                                        <p>Stay ahead of the curve with our fashion blog, where style meets substance. Dive into the latest trends, expert tips, and insider insights to elevate your wardrobe game.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col me-3 ms-2">
                            <article className="post-item card border-0 shadow-sm p-3">
                                <div className="image-holder zoom-effect">
                                    <a href="#">
                                        <img src={postThumb2} alt="post" className="card-img-top"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                                        <div className="meta-date"><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>25 Aug 2021</div>
                                        <div className="meta-categories"><svg width="16" height="16"><use xlinkHref="#category"></use></svg>trending</div>
                                    </div>
                                    <div className="post-header">
                                        <h3 className="post-title">
                                            <a href="#" className="text-decoration-none">Fashion Fusion Insights</a>
                                        </h3>
                                        <p>Unlock the secrets of seamless style integration! Explore our blog for curated content on AI-enhanced fashion fusion, virtual try-ons, and cutting-edge tech trends shaping the industry.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col me-3 ms-2">
                            <article className="post-item card border-0 shadow-sm p-3">
                                <div className="image-holder zoom-effect">
                                    <a href="#">
                                        <img src={postThumb3} alt="post" className="card-img-top"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                                        <div className="meta-date"><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>28 Aug 2021</div>
                                        <div className="meta-categories"><svg width="16" height="16"><use xlinkHref="#category"></use></svg>inspiration</div>
                                    </div>
                                    <div className="post-header">
                                        <h3 className="post-title">
                                            <a href="#" className="text-decoration-none">Style Savvy Chronicles</a>
                                        </h3>
                                        <p>Discover the stories behind the looks! Delve into our fashion narratives, from behind-the-scenes glimpses to inspirational journeys, and embark on a sartorial adventure like no other.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col me-3 ms-2">
                            <article className="post-item card border-0 shadow-sm p-3">
                                <div className="image-holder zoom-effect">
                                    <a href="#">
                                        <img src={postThumb4} alt="post" className="card-img-top"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                                        <div className="meta-date"><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>22 Aug 2021</div>
                                        <div className="meta-categories"><svg width="16" height="16"><use xlinkHref="#category"></use></svg>tips & tricks</div>
                                    </div>
                                    <div className="post-header">
                                        <h3 className="post-title">
                                            <a href="#" className="text-decoration-none">Fit & Fabulous Finds</a>
                                        </h3>
                                        <p>Find your fit, find your flair! Navigate the world of fashion with confidence as we share insights on sizing, fit tips, and personalized styling advice tailored just for you.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col me-3 ms-2">
                            <article className="post-item card border-0 shadow-sm p-3">
                                <div className="image-holder zoom-effect">
                                    <a href="#">
                                        <img src={postThumb5} alt="post" className="card-img-top"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                                        <div className="meta-date"><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>25 Aug 2021</div>
                                        <div className="meta-categories"><svg width="16" height="16"><use xlinkHref="#category"></use></svg>trending</div>
                                    </div>
                                    <div className="post-header">
                                        <h3 className="post-title">
                                            <a href="#" className="text-decoration-none">Chic & Sustainable</a>
                                        </h3>
                                        <p>Eco-friendly meets haute couture! Dive into our blog for a sustainable fashion journey, where we explore eco-conscious brands, ethical practices, and mindful style choices.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Blog;