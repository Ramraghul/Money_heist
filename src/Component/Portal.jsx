import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

function Portal() {
    return (
        <>
            <Nav></Nav>
            <section class="py-5 bg-black">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <Outlet/>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Portal