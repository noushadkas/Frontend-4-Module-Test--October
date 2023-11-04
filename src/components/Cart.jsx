import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'

const Cart = (props) => {

  const [cartArr,setCartArr] = React.useState([])
  useEffect(() => {
  setCartArr(props.cart.cart)
  });

  const total = cartArr.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

  function handleRemove(item,e) {
    e.preventDefault()
    // const filteredArr = cartArr.filter((arrItem)=>arrItem !== item)
    // setCartArr(filteredArr)
    props.dispatch({type :'remove',removeItem : item})
  }

  return (
<div> 
  <h1 id='h1'>My Cart</h1>
  <div className='menu'>
      <div className='cart-container'>
         {
          cartArr && cartArr.map((item,index)=>{
            return <div className='item' key={index}>
                <img src={item.thumbnail} alt="" />
                <p>Title : {item.title}</p>
                <p>Price : ${item.price}</p>
                <button id='homeButton' onClick={(e)=>handleRemove(item,e)}>Remove Item</button>
            </div>
           })
          }
     </div>

   {total !== 0 ? (<div className='product-container'>
      <p className='checkout'>Checkout List</p>
    <ol>
      {
         cartArr && cartArr.map((item,index)=>{
          return <li className='cart-item' key={index}><p>{item.brand}</p><p>-</p><p>${item.price}</p></li>
        })
      }
      
    </ol>
    <p className='total'><p>Total</p><p>-</p> <p>{total}</p></p>
   </div>): <h1>Your cart is empty...</h1>}
    
   </div>
</div>
  )
}

export default connect((store)=>store)(Cart)