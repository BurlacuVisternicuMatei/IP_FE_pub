import { useState } from "react"
import ReplyComment from "../replyComment";
import { RiVerifiedBadgeFill } from "react-icons/ri";


export default function Comment({img,tag,time,comment,verified}) {
    const [subComments, setSubComments] = useState([]);
    const [inputComment, setInputComment] = useState("");
    const [replyStatus, setReplyStatus] = useState(false);
    return (
        <>
            <div className="flex w-full items-center justify-between py-5 rounded-xl">
                <div className="flex">
                    <img className="flex rounded-full w-14 h-14" src={img}/>
                    <div className="flex flex-col">
                        <div className="flex">
                            <span className="ml-5 cursor-pointer hover:underline">@{tag}</span>
                            <span className="ml-5">{time}</span>
                            {
                                verified &&
                                <span className="h-full flex items-center px-2">
                                    <RiVerifiedBadgeFill/>
                                </span>
                            }
                        </div>
                        <p className="ml-5 overflow-y-hidden overflow-hidden break-words sm:w-[200px] md:w-[350px] lg:w-[600px] xl:w-[1000px]  text-wrap font-light">{comment}</p>
                    </div>
                </div>
                <button onClick={()=> setReplyStatus((status)=> !status)} className="rounded-lg hover:bg-gray px-5 py-2">Reply</button>
            </div>

            {
                replyStatus &&
                <div className="flex w-full justify-between px-20">
                    <input onChange={(input)=>setInputComment(input.target.value)} className="flex w-full justify-center items-center h-10 focus:bg-gray bg-transparent rounded-l-xl p-5" placeholder="Reply to the comment"></input> 
                    <button onClick={()=> {setReplyStatus(false); setSubComments(() => [...subComments, {tag:"Marius", img:"https://static.vecteezy.com/system/resources/previews/011/533/780/original/cute-horse-cartoon-isolated-on-white-background-horse-icon-concept-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-card-vector.jpg",  time: "1 minute ago", comment: inputComment}])} } className="bg-gray rounded-r-lg px-5">Send</button>
                </div>
            }

            {
                subComments && 
                subComments.map((comment) => 
                    <div className="w-full ml-10">
                        <ReplyComment img={comment.img} tag={comment.tag} replyTag={tag} time={comment.time} comment={comment.comment}/>
                    </div>
                )
            }
        </>
    )
}