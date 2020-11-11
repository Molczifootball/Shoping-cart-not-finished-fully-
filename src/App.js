import headphones from './images/headphones.png';
import ximg from './images/x-img.png';
import editimg from './images/edit-img.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import { render } from '@testing-library/react';


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    price: 11.9,
    count: 0,
    subtotal:0,
    grandtotal:0,
    ship:0
  }
}
increment = () => {
  this.setState({count: this.state.count + 1 })
}
decrement = () => {
  this.setState({count: this.state.count -1 })
}
calculateShip = () => {
  if(this.state.subtotal<=100){
    this.setState({ship: 23.80})
  }else{
    this.setState({ship: 0})
  }
}
updateShoppingCart = () => {
  let sub = (this.state.count * this.state.price)*100 / 100;
  sub.toFixed(2);
  this.setState({subtotal: sub})
  this.calculateShip()
}
proceed = () => {
  let element = document.getElementById("cartview");
  element.style.display = "none";
}
render() {
  return (
    <div className="App">
       <div id="cartview">
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
        <div id="summary">
            <div>
               <button type="button" className="button1 btn btn-dark btn-lg">Proceed to checkout</button><br/>
            </div>
            <div class="card">
            <div class="card-header">SHIPPING $ <span>{this.state.ship}</span></div>
            </div>
            <br/>
            <div className="card" >
              <div className="card-header">CART TOTALS</div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Subtotal $ <span>{this.state.subtotal}</span></li>
                <li className="list-group-item">Grand Total $ <span>{this.state.ship + this.state.subtotal}</span> </li>
                <li className="list-group-item"><button onClick={this.proceed} type="button" className="btn btn-dark btn-lg">Proceed to checkout</button></li>
                </ul>
              </div>
          </div>
    </div>
    </div>
  );
}

}

export default App;
