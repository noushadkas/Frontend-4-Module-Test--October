import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Home = (props) => {
    const [arr,setArr] = useState([])
    const [stateArr,setStateArr] = useState([])

    useEffect(()=>{
        fetch(' https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((data)=>setArr(data))
        .catch((error) => console.error(error));
    },[])
    useEffect(()=>{
        setStateArr(props.cart.cart)
    })

    function handleCart(e,id) {
        e.preventDefault()
        const item = arr.products.find((arrItem) => arrItem.id === id)
        const check = stateArr.some((arrItem)=>arrItem.id === id)

        if(check){
            alert("Item was already added to cart...")
        }else{
            props.dispatch({type : 'cart',payload : item})
        }
    }
  return (
    <div>

        <h1 id='h1'>All Items</h1>
        <div className='container'>
        {
           arr.products && arr.products.map((item,index)=>{
                return <div className='item' key={index}>
                    <img src={item.thumbnail} alt="" />
                    <p>Title : {item.title}</p>
                    <p>Price : ${item.price}</p>
                    <button type='button' id='homeButton' onClick={(e)=>handleCart(e,item.id)}>Add To Cart</button>
                </div>
            })
        }
    </div>0
    </div>
  )
}

export default connect((store)=>store)(Home)