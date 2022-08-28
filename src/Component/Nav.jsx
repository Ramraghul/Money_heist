import React, { useContext } from 'react'
import UserContext from '../Context/UseContext'

function Nav() {
    let context =useContext(UserContext)
    return (
        <>
            <nav class="navbar bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src='./Mask.png' alt="" width={"45"} height={"45"} class="d-inline-block align-text-top me-2" />
                        <span class='text-danger'><b>LA CASA DE PAPEL</b></span>
                    </a>
                    {/* <ul class="nav justify-content-end ">
                        <li class="nav-item">
                            <a class="nav-link text-danger " aria-current="page" href="#"><b>Active</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-danger" href="#"><b>Active</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-danger" href="#"><b>Active</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-danger"><b>Active</b></a>
                        </li>
                    </ul> */}
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 bg-black bg-outline-disable text-white" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-disable text-white btn-danger" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Nav