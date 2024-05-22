import { MdReport } from "react-icons/md";
import { FiMaximize2 } from "react-icons/fi";
import { FaWindowMinimize } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

import 'react-tooltip/dist/react-tooltip.css'

export default function FeedPost({id, verified, community, contentText,profileImg, postImg, numberOfComments}) {

    return (
        <>
            <div className={`flex flex-col w-full mx-auto bg-blue hover:bg-gray rounded-2xl shadow-lg h-fit transition-all px-10 py-5`}>
                <div className="flex h-10 pt-5">
                    <span className="flex justify-start font-semibold text-xl">
                        <div className="flex items-center">
                            {
                                verified &&
                                <>
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content="Approved by prof">
                                        <RiVerifiedBadgeFill/>
                                    </a>
                                    <Tooltip place="bottom" id="my-tooltip" />
                                </>
                            }
                            /{community}
                        </div>
                    </span>

                    <div className="flex justify-end items-center z-0 w-full">
                        <div className="flex justify-between w-20">
                            <Link 
                                to={{ pathname: "/threads" , search: `?id=` + id}}
                                className={`flex w-5 h-5 bg-light-gray hover:bg-green-500 cursor-pointer rounded-full justify-center items-center`}
                            >
                                <FiMaximize2 opacity="40%" alignmentBaseline="center" size={14} color="black"/>
                            </Link>
                            <Link 
                                to={"/"}
                                className={`flex w-5 h-5 bg-light-gray hover:bg-yellow-500 cursor-pointer rounded-full justify-center items-center`}
                            >
                                <FaWindowMinimize opacity="40%" alignmentBaseline="center"  size={12} color="black"/>
                            </Link>
                            <Link
                                to={"/"} 
                                className={`flex w-5 h-5 bg-light-gray  hover:bg-red-600 cursor-pointer rounded-full justify-center items-center`}>
                                <MdReport opacity="40%" alignmentBaseline="center" size={20} color="white"/>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                
                <h1 className="text-3xl font-bold py-5">Some description for the post</h1>
                
                <div className="flex flex-col h-fit w-full items-center justify-center">
                    {
                        contentText &&
                        <p className="h-48 text-xl overflow-clip my-5">
                            {contentText}
                        </p>
                    }
                    
                    {
                        postImg &&
                        <img 
                            src={postImg}
                            className="w-full p-5 object-cover rounded-lg mx-5"    
                        />

                    }
                </div>

                <div className="flex w-full h-20 my-2 items-center">
                    <img src={profileImg} className="h-12 w-12 rounded-full cursor-pointer object-cover mr-5 mx-2"></img>
                    <Link to={{ pathname: "/threads" , search: `?id=` + id}} className="flex justify-center items-center w-32 h-12 px-5 py-2 hover:bg-blue bg-gray rounded-2xl mx-2"><FaComments size={30} alignmentBaseline="center"/><span className="text-lg font-bold ml-2">{numberOfComments}</span></Link>
                    <button className="flex justify-center items-center w-32 h-12 px-5 py-2 hover:bg-blue bg-gray rounded-2xl mx-2"><FaShareAlt size={25} alignmentBaseline="center"/><span className="text-lg font-bold ml-2">Share</span></button>
                </div>
            </div>
        </>
    )
}