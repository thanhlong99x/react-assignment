import React from 'react'
import Header from '../component/website/header'
import Footer from '../component/website/footer'

const WebsiteLayout = (props) => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <main class="main" >{props.children}</main>
            </div>
            <Footer></Footer>
        </>
    )
    }
export default WebsiteLayout
