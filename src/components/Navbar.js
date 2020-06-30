import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
//import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sn bg-primary navbar-dark px-sm-5'>
            {/* https://www.iconfinder.com/icons/1243689/call_phone_iconCreative Commons (Attribution 3.0 Unported);https://www.iconfinder.com/Makoto_msk */}
               <Link to='/'>
                 <img src={logo} alt='store' className='navbar-brand'/>
               </Link>
               <ul className='navbar-nav align-items-center'>
                 <li className='nav-item ml-5'>
                     <Link to='/' className='nav-link'>
                         Products
                     </Link>
                 </li>
               </ul>
               <Link to='/cart' className='ml-auto'>
                 <ButtonContainer>
                   <span className='mr-2'>
                     <img alt='carticon' className='pa-5' src="https://img.icons8.com/metro/26/000000/shopping-cart.png"/>
                     My Cart
                     </span>
                 </ButtonContainer>
               </Link>
            </nav>
        );
    }
}

