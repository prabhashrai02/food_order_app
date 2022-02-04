import {Fragment} from 'react';
import './NavBar.css';
import mealsImage from '../../Assets/meal.webp';
import HeaderCartButton from './HeaderCartButton';

const NavBar = (props) => {
    return(
        <Fragment>
            <div className='navbar'>
                Order Your Food
                <HeaderCartButton />
            </div>
            <div className='main_img'>
                <img src= {mealsImage} alt= "A table full of delicious food" />
            </div>
        </Fragment>
    )
} 

export default NavBar;