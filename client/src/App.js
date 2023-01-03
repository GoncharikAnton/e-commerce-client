import axios from "axios";



import './App.css';
import {MyRoutes} from "./routes/routes";
import {BrowserRouter} from "react-router-dom";
import {DataContext} from "./context/context";
import {useContext, useState} from "react";
import {Header} from "./layouts/header/Header";
import {AdvertSlider} from "./components/AdvertSlider/AdvertSlider";
import {Footer} from "./layouts/footer/Footer";
import {ShortCard} from "./components/ShortCard/ShortCard";
import {LongCard} from "./components/LongCard/LongCard";
import FormCheck from "./components/FormCheck/CustomFormCheck";
import {PagePagination} from "./components/Pagination/PagePagination";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const context = useContext(DataContext);
    return (
        <BrowserRouter>
            <DataContext.Provider value={context}>
                <div className="App">
                    <Header/>
                    <MyRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                    <Footer/>
                </div>
            </DataContext.Provider>
        </BrowserRouter>
    );
}

export default App;
