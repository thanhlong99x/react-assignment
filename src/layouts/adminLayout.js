import React from 'react'
import Header from '../component/admin/header';
import Nav from '../component/admin/nav';

const AdminLayout = (props) => {
    console.log('props', props);
    return (
        <>
            <div>
                <Header  />
                <div className="container-fluid">
                    <div className="row">
                        <Nav />
                        <main className=" ms-sm-auto  px-md-2">
                        
                            {props.children}
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout;
