import React, { useContext } from 'react'
import UserContext from '../Context/UseContext'

function Student() {
    let team = useContext(UserContext)
    return (
        <>
            <div class="col mb-5 ">
                <div class="card h-100 bg-danger">
                    {/* <!-- Product image--> */}
                    <img class="card-img-top" src={team.data.image} style={{height:"26rem"}} alt=".." />
                    {/* <!-- Product details--> */}

                    <div class="card-body p-4 h-25">
                        <div class="text-center">

                            <h5 class="fw-bolder">{team.data.alias}</h5>
                            <p class="fw-bolder">Family:{team.data.family}</p>
                            <p class="fw-bolder">Name:{team.data.name}</p>
                            <p class="fw-bolder">Work:{team.data.occupation}</p>
                            <p class="fw-bolder">Lover:{team.data.romance}</p>

                        </div>
                    </div>

                    {/* <!-- Product actions--> */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto" href="#">View</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Student