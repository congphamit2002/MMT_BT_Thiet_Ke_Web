import React, { Component } from 'react'

import javaimg from '../Components/public/image/Java.jpg'
import jsimg from '../Components/public/image/javascriptimg2.png'
import htmlimg from '../Components/public/image/html5logo.jpg'
import cssimg from '../Components/public/image/csslogo.png'
import netimg from '../Components/public/image/net.png'
import mysqlimg from '../Components/public/image/mysql.png'





class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    <div><img src={javaimg} width="100" height="100" alt="java"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={mysqlimg} width="100" height="100" alt="mysql"/></div>  
                    <div><img src={netimg   } width="100" height="100" alt="net"/></div>
                
            </section>
        )
    }
}

export default Project
