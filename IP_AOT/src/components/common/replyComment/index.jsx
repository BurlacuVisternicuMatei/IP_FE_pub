import { useState } from "react";

export default function ReplyComment({img, tag, replyTag, time, comment}) {
    const [subComments, setSubComments] = useState([]);
    const [commentInput, setComment] = useState("");
    const [replyStatus, setReplyStatus] = useState(false);
    return (
        <>
            <div className="flex w-full items-center justify-between px-10 py-5 rounded-xl">
                <div className="flex">
                    <img className="flex rounded-full w-14 h-14" src={img}/>
                    <div className="flex flex-col">
                        <div className="flex">
                            <span className="ml-5 cursor-pointer hover:underline">@{tag}</span>
                            <span className="ml-5">{time}</span>
                        </div>
                        <div className="ml-5 overflow-y-hidden break-words sm:w-[100px] md:w-[250px] lg:w-[500px] xl:w-[900px] h-fit leading-7 py-2 ">
                            <span className="bg-gray w-full p-2 mr-1 rounded-xl cursor-pointer active:bg-blue">@{replyTag}</span>{comment}
                        </div>
                    </div>
                </div>
                <button onClick={()=> setReplyStatus((status)=> !status)} className="rounded-lg hover:bg-gray p-5">Reply</button>
            </div>

            {
                replyStatus &&
                <div className="flex w-full justify-between px-20">
                    <input value={commentInput} onChange={(input)=>setComment(input.target.value)} className="flex w-full justify-center items-center h-10 focus:bg-gray bg-transparent rounded-l-xl p-5" placeholder="Reply to the comment"></input> 
                    <button onClick={()=> {setReplyStatus(false); setSubComments(() => [...subComments, {tag:"Marius", img:"https://static.vecteezy.com/system/resources/previews/011/533/780/original/cute-horse-cartoon-isolated-on-white-background-horse-icon-concept-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-card-vector.jpg",  time: "1 minute ago", comment: commentInput}])} } className="bg-gray rounded-r-lg px-5">Send</button>
                </div>
            }

            {
                subComments && 
                subComments.map((subComment) => 
                    <div>
                        <ReplyComment key={subComment.tag} img={subComment.img} tag={subComment.tag} replyTag={tag} time={subComment.time} comment={subComment.comment}/>
                    </div>
                )
            }
        </>
    )
};
