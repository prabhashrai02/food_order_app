import {Fragment} from 'react';
import './NavBar.css';
import mealsImage from '../../Assets/meal.webp';

const NavBar = () => {
    return(
        <Fragment>
        <div className='navbar'>
            Order Your Food
        </div>
        <div className='main_img'>
            <img src= {mealsImage} alt= "A table full of delicious food" />
        </div>
        </Fragment>
    )
} 

export default NavBar;