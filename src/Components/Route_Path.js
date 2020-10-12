import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router-dom"

import SignUp from "./Common/SignUp";
import SignIn from "./Common/SignIn";
import CreateShop from "./Shop/CreateShop";
import AddProduct from "./Product/AddProduct";
import Search from "./Common/Search";
import ShopProfile from "./Shop/ShopProfile";
import ProductView from "./Product/ProductView";
import AdminBord from "./Admin/AdminBord";
import ShopDetail from "./Admin/ShopDetail";
import OrderDetail from "./Admin/OderDetail";
import UserDetails from "./Admin/UserDetail";
import ProductDetails from "./Admin/ProductDetail";
import EditUser from "./Admin/EditUser";
import EditProduct from "./Admin/EditProduct";
import HomePageProductView from './Common/HomPageProductView';
import AddToCard from './Card/AddToCard';
import Payment from './Card/Payment';


export default class RoutePath extends Component {
    render() {
        return(
                <Router>
                        <Route exact path={["/", "/home"]} component={HomePageProductView} />
                        {/* <Route exact path={["/profile"]} component={Profile} /> */}
                        <Route exact path={["/search/:id"]} component={Search} />
                        <Route exact path={["/product"]} component={ProductView} />
                        <Route exact path={["/addproduct"]} component={AddProduct} />
                        <Route exact path={["/signin"]} component={SignIn} />
                        <Route exact path={["/signup"]} component={SignUp} />
                        <Route exact path={["/createshop"]} component={CreateShop} />
                        <Route exact path={["/shopprofile"]} component={ShopProfile} />
                        <Route exact path={["/addcard"]} component={AddToCard} />
                        <Route exact path={["/payment"]} component={Payment} />

                        <Route exact path={["/admin"]} component={AdminBord} />
                        <Route exact path={["/shopdetails"]} component={ShopDetail} />
                        {/* <Route exact path={["/adminShopEdite"]} component={AdminShopEdite} /> */}
                        <Route exact path={["/userdetails"]} component={UserDetails} />
                        <Route exact path={["/edituser/:id"]} component={EditUser} />
                        <Route exact path={["/productdetails"]} component={ProductDetails} />
                        <Route exact path={["/editproduct"]} component={EditProduct} />
                        <Route exact path={["/orderdetails"]} component={OrderDetail} />
                        {/* <Route exact path={["/editOrder"]} component={EditOrder} /> */}
                        {/* <Route exact path={["/addOrder"]} component={AddOrder} /> */}
                </Router>   
        )
    }
}