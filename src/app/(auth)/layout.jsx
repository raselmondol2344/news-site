"use client"
import Navbar from '@/components/Navbar';


const Authlayout = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        {children}
        </>
    );
};

export default Authlayout;