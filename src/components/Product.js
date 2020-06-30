import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';


export class Product extends Component {
    render() {
        const{id, title , img , price , inCart}=this.props.product;
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
              <div className='card'>
              <ProductConsumer>
               {value => (
                <div className='img-container p-5' 
                     onClick={() =>
                     value.handleDetail(id)}
                     >
                   <Link to='/details'>
                     <img src={img} alt='product' className='card-img-top' />
                   </Link>  
                   {/* Cart button*/}
                   <button 
                    className='cart-btn' 
                    disabled={inCart? true: false}
                    onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
                    }}
                    >
                      {inCart? (<p className='text-capitalize mb-0'>In Cart</p>)
                             :( <img alt='carticon' className='' src="https://img.icons8.com/metro/26/000000/shopping-cart.png"/>)  } 
                   </button>
                </div>
               )}
                
                </ProductConsumer>
                {/* Card footer */}
                <div className='card-footer d-flex justify-content-between'>
                   <p className='align-self-center mb-0'>
                       {title}
                   </p>
                   <h5 className='text-blue font-italic mb-0'>
                       <span className='mr-1'>$</span>
                       {price}
                   </h5>
                </div>
              </div>
              
            </ProductWrapper>
        )
    }
}

Product.propTypes={
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool

    })
}

const ProductWrapper = styled.div`
.card{
    border-color: grey;
    transition:all 0.7s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.7s linear;
}
&hover{
    .card{
        border: 0.4rem solid skyblue;
        box-shadow: skyblue;
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all 0.7s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.1);
}
.cart-btn{
    size: 75%;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.6rem 0.8rem;
    background: skyblue;
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem;
    transform: translate(100%,100%);
    transition: all 0.4s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    color: red;
    cursor: pointer;
}
`



export default Product
