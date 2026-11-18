import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Aheads() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Aid")){
            redirect("/alogin")
        }
    })

    const Alogout =()=>{
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        redirect("/alogin")
        toast.success("Admin logout Success")
    }
    
  return (
    <div>
        <div>
                {/* Navbar start */}
                <div className="container-fluid nav-bar">
                    <div className="container">
                        <nav className="navbar navbar-light navbar-expand-lg py-4">
                            <a href="index.html" className="navbar-brand">
                                <h1 className="text-primary fw-bold mb-0">Dashboard<span className="text-dark"></span> </h1>
                            </a>
                            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars text-primary" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav mx-auto">
                            
                                    <div className="nav-item dropdown">
                                        <a  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Events</a>
                                        <div className="dropdown-menu bg-light">
                                            <NavLink to="/eventmange" className="dropdown-item">manage</NavLink>
                                            <NavLink to="/eventadd" className="dropdown-item">Events add</NavLink>
                                        </div>
                                    </div>
                                     <div className="nav-item dropdown">
                                        <a  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Menu</a>
                                        <div className="dropdown-menu bg-light">
                                            <NavLink to="/menumanage" className="dropdown-item">manage</NavLink>
                                            {/* <NavLink to="/eventadd" className="dropdown-item">Events add</NavLink> */}
                                        </div>
                                    </div>
                                    
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu bg-light">
                                            <NavLink to="/book" className="dropdown-item">Booking</NavLink>
                                            <NavLink to="/blog" className="dropdown-item">Our Blog</NavLink>
                                            <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                            <NavLink to="/test" className="dropdown-item">Testimonial</NavLink>
                                        </div>
                                    </div>
                                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                </div>
                               {
                                (()=>{
                                    if(localStorage.getItem("Aid")){
                                        return(
                                            <>
                                                 <a  className="btn btn-primary py-2 px-4 d-none d-xl-inline-block">hello {localStorage.getItem("Aname")}</a>
                                            </>
                                        )
                                    }
                                })()
                               }
                               
                               {
                                (()=>{
                                    if(localStorage.getItem("Aid")){
                                        return(
                                            <>
                                                 <Link onClick={Alogout} className="btn btn-primary mx-2 py-2 px-4 d-none d-xl-inline-block">ALogout</Link>
                                            </>
                                        )
                                    }
                                })()
                               }
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Navbar End */}
                {/* Modal Search Start */}
                <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body d-flex align-items-center">
                                <div className="input-group w-75 mx-auto d-flex">
                                    <input type="search" className="form-control bg-transparent p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Search End */}
            </div>
    </div>
  )
}

export default Aheads