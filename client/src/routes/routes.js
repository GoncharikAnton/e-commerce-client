import {Navigate, Route, Routes} from "react-router";
import {MainPage} from "../layouts/main/MainPage/MainPage";
import {LoginPage} from "../layouts/main/LoginPage/LoginPage";
import {ProductPage} from "../layouts/main/ProductPage/ProductPage";
import {AllProductsPage} from "../layouts/main/AllProductsPage/AllProductsPage";
import {DataContext} from "../context/context";
import {useContext} from "react";
import {Cart} from "../layouts/main/Cart/Cart";
import {Wishlist} from "../layouts/main/Wishlist/WishList";
import {MyProfilePage} from "../layouts/main/MyProfilePage/MyProfilePage";

export const MyRoutes = ({isLoggedIn, setIsLoggedIn}) => {
    if(isLoggedIn){
        return (
            <>
                <Routes>
                    <Route path={'/'} exact element={<MainPage/>}/>

                    <Route path={'/products/:id'} exact element={<ProductPage/>}/>

                    <Route path={'/products'} exact element={<AllProductsPage/>}/>

                    {/*<Route path={'/login'} exact element={<LoginPage/>}/>*/}
                    <Route path={'/cart'} exact element={<Cart/>}/>
                    <Route path={'/wishlist'} exact element={<Wishlist/>}/>
                    <Route path={'/profile'} exact element={<MyProfilePage/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/"/>}
                    />
                </Routes>
            </>
        )

    }else{
        return (
            <>
                <Routes>
                    <Route path={'/'} exact element={<MainPage/>}/>

                    <Route path={'/products/:id'} exact element={<ProductPage/>}/>

                    <Route path={'/products'} exact element={<AllProductsPage/>}/>

                    <Route path={'/login'} exact element={<LoginPage isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    />}/>

                    <Route
                        path="*"
                        element={<Navigate to="/"/>}
                    />
                </Routes>
            </>
        )
    }

}