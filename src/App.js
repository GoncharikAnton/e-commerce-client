import './App.css';
import {MyRoutes} from "./routes/routes";
import {BrowserRouter} from "react-router-dom";
import {DataContext} from "./context/context";
import {useContext} from "react";
import {Header} from "./layouts/header/Header";
import {AdvertSlider} from "./components/AdvertSlider/AdvertSlider";
import {Footer} from "./layouts/footer/Footer";

function App() {

    const Context = useContext(DataContext)

    return (
        <BrowserRouter>
            <DataContext.Provider value={Context}>
                <div className="App">
                    <Header/>
                    {/*<MyRoutes/>*/}
                    <AdvertSlider/>
                    <Footer/>
                </div>
            </DataContext.Provider>
        </BrowserRouter>
    );
}

export default App;
