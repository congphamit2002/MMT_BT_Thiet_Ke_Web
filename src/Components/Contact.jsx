import React, { Component } from 'react'
import contact from '../Components/public/image/contact.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="24%" height="180" alt="contactlogo"/>
                <h4>Email: thanhcongpham22072002@gmail.com</h4>
                <h4>Số điện thoại: 0382412729</h4>

                
                
                        <a href="https://www.facebook.com/profile.php?id=100010572304112">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="#" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="#">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="#">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://www.instagram.com/thanhcongpham22072002/">
                                <span className="icon fa fa-instagram" style={{color:'antiquewhite'}}></span>
                        </a>
                
            </section>
        )
    }
}

export default Contact
