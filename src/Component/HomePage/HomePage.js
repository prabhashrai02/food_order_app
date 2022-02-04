import {Fragment} from 'react';
import NavBar from '../NavBar/NavBar';
import MainContent from '../MainContent/MainContent';
import './HomePage.css';

const HomePage = () => {
    return(
        <Fragment>  
            <NavBar />    
            <MainContent />
        </Fragment>
    )
} 

export default HomePage;