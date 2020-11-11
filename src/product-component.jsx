import  React, { Component } from "react";
import headphones from './images/headphones.png';
import ximg from './images/x-img.png';
import editimg from './images/edit-img.png';

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            showCart: true
        }
      }
      

render(){
    return(
        <div id="product">
                    <h2>Shoping Cart</h2><br/>
                    <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Qty</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"><img src={ximg} alt=""/></th>
                            <td><img src={headphones} alt=""/></td>
                            <td>Headphones</td>
                            <td>$11.90</td>
                            <td>
                                <div>
                                    <button className="Qty" onClick={this.decrement}>-</button>
                                    <input className="Qty" type="text" value={this.state.count} />
                                    <button className="Qty" onClick={this.increment}>+</button>
                                    <span onClick={this.updateShoppingCart}><img src={editimg} alt=""/></span>
                                </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button type="button" className="btn btn-dark btn-lg" onClick={this.updateShoppingCart}>Update Shopping Cart</button></td>
                          </tr>
                        </tbody>
                      </table>
                </div>
    );
}
}

export default Product;