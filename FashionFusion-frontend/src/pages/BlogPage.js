import React,{Fragment,useEffect,useState} from "react";
import Header from "../layouts/home/Header";
import HeaderIcons from "../layouts/home/HeaderIcons";
import Footer from "../layouts/home/Footer";
import bgImage from "../assets/images/fashion/viubox-746x620.jpg";
import postThumb1 from "../assets/images/fashion/frame-99.jpg";
import postThumb2 from "../assets/images/fashion/9 Minimalist Style Fashion Bloggers You Should Know 001.jpg";
import postThumb3 from "../assets/images/fashion/63bf1f4387ee8107fe76236f_howitworks.png";
import postThumb4 from "../assets/images/fashion/VTO.jpg";
import postThumb5 from "../assets/images/fashion/Top-Fashion-Bloggers-minimalist-modest-mom-blog-fashion-outfits-1.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const BlogPage=()=>{

    return(
        <Fragment>
            <Header/>
            <HeaderIcons/>
            <div style={{width:'100%',height:'30rem',marginBottom:30,backgroundImage:`url(${bgImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1 style={{color:'white',background:'rgba(0, 0, 0, 0.54)',width:300,height:100,display:'flex',justifyContent:"center",alignItems:"center",border:'6px solid white'}}>Blogs</h1>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
                <h1 style={{textAlign:"center",fontWeight:"bold",color:'black',borderBottom:'3px solid',borderBottomColor:'black'}}>Our Blogs</h1>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:50}}>
                <p style={{textAlign:'center',}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci assumenda, consectetur cumque doloremque, eaque enim esse fugiat id modi! </p>
            </div>
            <div className="category-carousel swiper" style={{marginLeft:100,marginRight:100}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
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
                                            <a href="#" className="text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipi elit</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
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
                                            <a href="#" className="text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipi</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
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
                                            <a href="#" className="text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipi elit</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
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
                                            <a href="#" className="text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipi elit</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
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
                                            <a href="#" className="text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipi elit</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
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
                                            <a href="#" className="text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipi elit</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
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
                                            <a href="#" className="text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipi elit</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
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
                                            <a href="#" className="text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipi elit</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            </div>

            <Footer/>
        </Fragment>
    )
}

export default BlogPage;