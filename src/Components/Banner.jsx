import React, { Component } from 'react'
import logo from '../Components/public/image/CongPham.jpg';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="https://www.facebook.com/profile.php?id=100010572304112"><img id="profilepic" src={logo}  width="200" height="200" alt="profilepic"/></a>
                    <h1> Xin chào!! Tôi là Phạm Thành Công </h1>
                    
            </section>
        )
    }
}

export default Banner


