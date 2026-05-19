import ReactDOM from "react-dom/client"
import Restaurant from "./Components/Restaurant";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router" ;
import RestaurantMenu from "./Components/RestaurantMenu";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
                    <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>

                </Routes>
            </BrowserRouter>

        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


