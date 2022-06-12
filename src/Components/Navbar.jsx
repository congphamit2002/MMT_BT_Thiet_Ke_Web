import React, { Component } from 'react'
import './css/Main.css'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
                <a href="#container-about"><i className="fa fa-fw fa-user"></i>Giới thiệu</a>
                <a href="#skillheader"><i className="fa fa-fw fa-xing"></i>Skills</a>
                <a id="protofolio-link" href="#Portfolio"><i className="fa fa-github-alt"></i>Dự án đã làm</a> 
                <a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Liên Hệ</a>
            </nav>
        )
    }
}

export default Navbar
