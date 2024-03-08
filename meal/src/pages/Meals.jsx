// import React, { useEffect, useState } from 'react';
// import axios from '../axios'; 
// import './Meals.css'

// const Meals = () => {
//     const [meals, setMeals] = useState([null]);

//         const getMeals = async () => {
//             const {data} = await axios.get('/random.php');
//             console.log(data.meals[0]);
//             setMeals(data.meals[0]);
//         };

//         useEffect(()=>{
//             getMeals();
//         },[])
//         console.log(meals);

//     return (
//         <div className='meals-inner'>
//             <h6>{meals.strMeal}</h6>
//             <div className="meals-img">
//             <img style={{ width:200 ,}} src={meals.strMealThumb} alt="" />
//             </div>
//         </div>
//     );
// }

// export default Meals;

import React, { useState } from "react";
import Mealitem from "./MealItem";
import './Meals.css';
const Meal = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key=="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
        }
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                </div>
                <div className="container">
                   {   
                  
                    (Mymeal==null)? <p className="notSearch">Not found</p> : 
                         Mymeal.map((res)=>{
                             return(
                            <Mealitem data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>
            </div>
        </>
    )
}
export default Meal;