import React, { Component } from 'react'
import biologo from './public/image/gioithieubanthan.png'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>Giới thiệu bản thân</h1> 

                    <img src={biologo} className="about-us-img" width="30%" height="180" alt="abtimg"/>
                    <p>Hiện tại tôi đang là sinh viên năm 2 tại trường Đại học Bách Khoa Đà Nẵng, trong tương lai tôi muốn trở thành một Back-end developer!!!!!
                    </p>
                
            </section>
        )
    }
}

export default About
