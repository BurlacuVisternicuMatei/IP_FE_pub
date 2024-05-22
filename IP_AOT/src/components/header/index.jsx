import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";


export default function Header() {
        return (
            <div className='flex fixed z-20  w-full bg-blue drop-shadow-2xl justify-between px-10 py-6'>
                <div>
                    
                </div>
                
                <div className='w-[200px] flex justify-between'>
                    <button><IoIosNotificationsOutline size={30}/></button>
                    <button><IoCreateSharp size={30}/></button> 
                    <button><a href="/profil"><CgProfile size={30}/></a></button>
                </div> 
            </div>
     )
}