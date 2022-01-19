import React from 'react';
import NavBar from '../NavBar/NavBar';
import MainContent from '../MainContent/MainContent';
import './HomePage.css';

const HomePage = () => {
    return(
        <React.Fragment>  
            <NavBar />    
            <MainContent />
        </React.Fragment>
    )
} 

export default HomePage;