import {Route, Routes} from "react-router";
import {MainPage} from "../layouts/main/MainPage/MainPage";
import {LoginPage} from "../layouts/main/LoginPage/LoginPage";
import {ProductPage} from "../layouts/main/ProductPage/ProductPage";
import {AllProductsPage} from "../layouts/main/AllProductsPage/AllProductsPage";

export const MyRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} exact element={<MainPage/>}/>

                <Route path={'/products/:id'} exact element={<ProductPage/>}/>

                <Route path={'/products'} exact element={<AllProductsPage/>}/>

                <Route path={'/login'} exact element={<LoginPage/>}/>


                {/**/}
                {/*<Route path={'/cart'} exact element={<Cart/>}/>*/}
                {/**/}
                {/*<Route path={'/products/:id'} exact element={<ProductDetail/>}/>*/}
            </Routes>
        </>
    )
}