import React from 'react'
import ListData from "./data.json"
import ProductList from './ProductList'
import ProductDetail from './ProductDetail';
import Cart from './Cart';

const BTShoeShop = () => {
  return (
    <div>
        <div className='d-flex justify-content-between'>
        <h1 className=''>BTShoeShop</h1>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cart">Giỏ hàng</button>
        </div>
        <ProductList ListData = {ListData} />
        <ProductDetail/>
        <Cart />
    </div>
  )
}

export default BTShoeShop