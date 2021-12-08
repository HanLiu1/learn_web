// 应用的根组件

import React,{Component} from "react";


import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin"



export default class App extends Component{

    render(){
        return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Admin />}></Route>
        <Route path='/login'  element={<Login />}></Route>
        </Routes>
        </BrowserRouter>
        )
      
    }

}