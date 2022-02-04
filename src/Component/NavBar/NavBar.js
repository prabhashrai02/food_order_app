import {Fragment} from 'react';
import './NavBar.css';
import mealsImage from '../../Assets/meal.webp';

const NavBar = () => {
    return(
        <Fragment>
        <div className='navbar'>
            Order Your Food
        </div>
        <img src= {mealsImage} alt= "A table full of delicious food" />
        </Fragment>
    )
} 

export default NavBar;