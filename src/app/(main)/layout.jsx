"use client"
import Header from '@/components/Header';
import LatesNews from '@/components/LatesNews';
import Navbar from '@/components/Navbar';


const mainlayout = ({children}) => {
    return (
       <>
       <Header></Header>
       <LatesNews></LatesNews>
       <Navbar></Navbar>
       {children}
       </>
    );
};

export default mainlayout;