import React, { useContext, useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { userContext } from '../Context/UserName'
import { AuthContext } from '../Context/AuthContext'
import ReactPlayer from 'react-player'
export default function Home() {
    const {setToken} = useContext(AuthContext)
    const navigate = useNavigate()
    const [isOpen , setOpen] = useState(false)
    const handleLogout = ()=>{
localStorage.removeItem("token");
localStorage.removeItem("userName");
setToken("")
navigate('/signin')
    }
    const {userName} = useContext(userContext)
    const [products , setProducts] = useState([])
useEffect(()=>{
    axios.get("https://ecommerce.routemisr.com/api/v1/products")
    .then((res)=> setProducts(res.data.data))

} , [])
const {addToProduct} = useContext(CartContext)
  return (
    <>
    <div className='w-100 '>
        <div className="container-lg">
            <div className="row">
            <div className=" col-4 col-lg-4  d-flex align-items-center justify-content-center ">
                    <h2>hello {userName}</h2>
            </div>
            <div className="col-4 col-lg-4  d-flex align-items-center justify-content-center ">
            <Link to={"/"} style={{textDecoration:"none" , color:"#000" , fontSize:"40px"}}>Home</Link>

            </div>
            <div className="col-4 col-lg-4 d-flex align-items-center justify-content-center ">
            <h2 onClick={handleLogout} style={{cursor:"pointer"}} className='m-0 '> log out</h2>
            </div>
        </div>
        </div>
    
{/* <Link to={"cart"} style={{textDecoration:"none" , color:"#000" , fontSize:"40px"}}>cart</Link> */}

    </div>
    {      console.log(products)}
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-4 mt-3" >
            <ReactPlayer url='https://www.youtube.com/watch?v=CshWtWwlHeU' light={true} muted  width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/ZErtcuSGHOU?si=liWktgXUOMv__Asm' light={true} muted width={"100%"} height={"210px"} controls  />
            </div> 
             <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/8w8GqX4YMMA?si=_TfoVkSRx6rJHqHL' light={true} muted width={"100%"} height={"210px"} controls />
            </div> 
             <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/Di_RlcpkpN4?si=pKQisRGrcQkT9MI9' light={true} muted width={"100%"} height={"210px"} controls/>
            </div>
             <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/ACOiGZoqC8w?si=DTeFAX0pb6JUj23Y' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/CSIyaOPP7tg?si=upSS4rzMXmMpemp0' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/PYjyg0LNTfE?si=yrJUvMZAOFdKWeR9' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/Iu1T7j2FA4M?si=fqYryfJ7H3Y-3Pu4' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/auFVttzUoo8?si=cSi-QUMarCmnqGyr' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/DcyOVddJ62E?si=Aoay4GvJiG71VUKG' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3" >
            <ReactPlayer url='https://www.youtube.com/watch?v=CshWtWwlHeU' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/ZErtcuSGHOU?si=liWktgXUOMv__Asm' light={true} muted width={"100%"} height={"210px"} controls  />
            </div> 
             <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/8w8GqX4YMMA?si=_TfoVkSRx6rJHqHL' light={true} muted width={"100%"} height={"210px"} controls />
            </div> 
             <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/Di_RlcpkpN4?si=pKQisRGrcQkT9MI9' light={true} muted width={"100%"} height={"210px"} controls/>
            </div>
             <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/ACOiGZoqC8w?si=DTeFAX0pb6JUj23Y' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/CSIyaOPP7tg?si=upSS4rzMXmMpemp0' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/PYjyg0LNTfE?si=yrJUvMZAOFdKWeR9' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/Iu1T7j2FA4M?si=fqYryfJ7H3Y-3Pu4' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/auFVttzUoo8?si=cSi-QUMarCmnqGyr' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
            <div className="col-lg-4 mt-3">
            <ReactPlayer url='https://youtu.be/DcyOVddJ62E?si=Aoay4GvJiG71VUKG' light={true} muted width={"100%"} height={"210px"} controls />
            </div>
    </div>
    </div>
    
    
    
    
    
    
    
    

    </>
  )
}
