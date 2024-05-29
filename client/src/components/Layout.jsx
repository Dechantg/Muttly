import React from 'react';
import { useLocation } from 'react-router-dom';
import  NavigationBarTop from './NavigationBarTop'
import  NavigationBarBottom  from './NavigationBarBottom'
import '../App.scss'


const Layout = ({children}) => {

    return (
        <div>
<NavigationBarTop />
{children}
<NavigationBarBottom />

</div>
    )
}

export default Layout;