import React from 'react'


export default function CartItem({item, value}) {
    const{ id,title,img,price,total,count } = item;
    const{increment, decrement,removeItem}=value;
    return (
        <div className='row my-2 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} 
                     style={{width:'5rem', height:'5rem'}}
                     className='img-fluid'
                     alt='product'
                />
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>product : </span>{title}
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>price : </span>{price}
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
             <div className='d-flex justify-content-center'>
              <div>
                <span className='btn btn-black mx-1' onClick={()=>decrement(id)}>
                 -
                </span>  
                <span className='btn btn-black mx-1' >
                 {count}
                </span> 
                <span className='btn btn-black mx-1' onClick={()=>increment(id)}>
                 +
                </span> 
              </div>
             </div>
            </div>
            {/*  */}
            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={()=>removeItem(id)}>
                <img alt='trashicon' src="https://img.icons8.com/small/32/000000/trash--v1.png"/>
                 </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <strong>item total: $ {total}</strong>
            </div>
        </div>
    )
}

//<img src="https://img.icons8.com/metro/26/000000/shopping-cart.png"/>

//<a href="https://icons8.com/icon/3538/shopping-cart">Shopping Cart icon by Icons8</a>

//<img src="https://img.icons8.com/android/50/000000/trash.png"/>

//<a href="https://icons8.com/icon/4090/trash">Trash icon by Icons8</a>