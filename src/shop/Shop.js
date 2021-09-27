import React, {Component} from "react";
import { CategoryNavigation } from "./CategoryNavigation";
import {ProductList} from "./ProductList";
import {CartSummary} from "./CartSummary";
//addToCart 액션 생성자를 래핑하고 새 url로의 내비게이션을 위한 함수

export class Shop extends Component{
    handleAddToCart =(...args)=>{
        this.props.addToCart(...args);
        this.props.history.push("/shop/cart");
    }
    render(){
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                    <CartSummary {...this.props} />
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products"
                    categories={this.props.categories}/>
                </div>
                <div className="col-9 p-2">
                    <ProductList products={this.props.products} addToCart={this.handleAddToCart}/>
                </div>
            </div>
        </div>
    }
}