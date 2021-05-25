import React,{useEffect} from 'react';
import 'antd/dist/antd.css';
import {Button,PageHeader} from 'antd';
import logo from '../../assets/TTG.png'



function HeaderBlock() {

    // const history = useHistory();

    const  logout = (values) => {
        
        localStorage.clear();
        // history.push('/');
    };
    
    return( 
    

        <PageHeader
            style={{ backgroundColor: "transparent" }}
            className="site-page-header"
            // onBack={() => null}
            title={<a href="/dashboard"><img src={logo} height="70px" alt="TTG" /></a>}
            extra={[
                localStorage.getItem('login') ? <Button key="LogoutButton" onClick={logout} >
                    <a href="/">Logout</a>
                </Button>
                    : <span key="span-header"></span>
            ]}
        />
    )
}

export default HeaderBlock;