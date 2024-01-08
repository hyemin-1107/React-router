import React from 'react';
import Header from '../../components/Header';
import MainContents from './components/Maincontents';
import MainCarousel from './components/MainCarousel';
import Footer from '../../components/Footer';

const Main = () => {

    return (
        <>
            <Header />
            <MainContents />
            <MainCarousel />
            <Footer />
        </>
    )

};


export default Main;