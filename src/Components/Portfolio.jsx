import React, { Component } from 'react'
import theband from '../Components/public/image/theband.png';
import shopee from '../Components/public/image/shopee.png';
import doan from '../Components/public/image/doan.png';




class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>Các dự án đã làm</h1>
                  <p>Sau đây là một vài dự án đã làm của tôi!!!</p>

                    <div className="container">
                        <a href="#"><img src={theband} width="80%" height="200" alt="#"/><p>Web the-band bằng HTML-CSS</p></a>
                        <a href="#"><img src={shopee} width="80%" height="200" alt="#"/><p>Web bán hàng</p></a>
                    </div>

                    <div className="container">
                        <a href="#"><img src={doan} width="100%" height="200" alt="#"/><p>Quản lý nhân viên quán cafe</p></a>
                    </div>

                       
            </section>
        )
    }
}

export default Portfolio


