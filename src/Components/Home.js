
import FoodOption from "./FoodOption";
import GroceryOption from "./GroceryOption";
import DineOption from "./DineOption";
import Header from "./Header";

// home 
export default function Home() {
    return (

        <>
          <Header></Header>
            <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
            <DineOption></DineOption>
        </>
    )
}