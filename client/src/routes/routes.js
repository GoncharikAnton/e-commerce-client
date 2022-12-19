import {Route, Routes} from "react-router";
import {MainPage} from "../layouts/main/MainPage/MainPage";

export const MyRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} exact element={<MainPage/>}/>

                {/*<Route path={'/products'} exact element={<Products/>}/>*/}
                {/**/}
                {/*<Route path={'/cart'} exact element={<Cart/>}/>*/}
                {/**/}
                {/*<Route path={'/products/:id'} exact element={<ProductDetail/>}/>*/}
            </Routes>
        </>
    )
}