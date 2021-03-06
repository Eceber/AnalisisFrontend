import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom' //esto guarda todos los componentes
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import Principal from './nucleo/Principal';
import PrivateRoute from './autentificacion/PrivadoRoute';
import Perfil from './user/Perfil';
import AdminRoute from './autentificacion/AdminRoute';
import AdminD from './user/AdminD';
import AgregarCategoria from './admin/AgregarCategoria';
import AgregarProducto from './admin/AgregarProducto';
import Producto from './user/Producto';
import ModificarProducto from './admin/ModificarProducto';
import EliminarProducto from './admin/EliminarProducto';
//props --> parámetro de consulta props se puede 
//utilizar en varios comandos GET 
//que devuelven un recurso de instancia única. 
//BrowserRouter --> hace el props

const Routes = () => {
    return ( 
    <BrowserRouter> 
        <Switch>
            <Route path="/" exact component={Principal}/>
            <Route path="/SignIn" exact component={SignIn}/>
            <Route path="/SignUp" exact component={SignUp}/>
            <PrivateRoute path="/Perfil" exact component={Perfil}/>
            <AdminRoute path="/Admin" exact component={AdminD}/>
            <AdminRoute path="/producto/agregar/categoria" 
            exact component={AgregarCategoria}/>
            <Route path="/producto" exact component={Producto}/>
            <AdminRoute path="/producto/agregar" 
            exact component={AgregarProducto}/>
            <AdminRoute path="/Articulo/:productId/" 
            exact component={ModificarProducto}/>
            <AdminRoute path="/Eliminar/Articulo/:productId" 
            exact component={EliminarProducto}/>


        </Switch>
    </BrowserRouter>
    );
}

export default Routes;