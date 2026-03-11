import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";


function App(){

    return(
  <>
   <Header></Header>
  </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
