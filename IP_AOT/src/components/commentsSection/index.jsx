import Comment from "../common/comment"
import { useState } from "react";

export default function CommentsSection({data}) {
    const [comments, setComments] = useState([]);
    const [commentInput, setInputComment] = useState("");
    
    return (
        <div className="flex w-full flex-col justify-center shadow-2xl mt-5 pt-10 px-10">
            <div className="flex justify-center h-24 w-full">
                <input value={commentInput} onChange={(input) => setInputComment(input.target.value)} className="flex justify-center items-center w-full h-24 rounded-l-lg focus:bg-gray bg-transparent p-5" placeholder="Enter your comment"></input> 
                <button onClick={
                    () => {
                        setComments((comments) => setComments([...comments, {tag:"Marius", img:"https://img.freepik.com/free-vector/cute-shark-swimming-cartoon-icon-illustration_138676-2245.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1713484800&semt=ais",  time: "1 minute ago", comment: commentInput}]));
                        setInputComment("");
                    }
                } className="bg-gray p-5 font-semibold rounded-r-lg">Add comment</button>
            </div>
            <div className="my-5">
                {
                    data &&
                    data.map((comment)=>
                        <Comment key={comment.id} img={comment.profileImg} comment={comment.comment} time={comment.dateCreated} tag={comment.tag} verified={comment.verified}/>
                    )
                }
                {
                    comments && 
                    comments.map((comment) => 
                        <Comment img={comment.img} comment={comment.comment} time={comment.time} tag={comment.tag} verified={comment.verified}/>
                    )
                }
            
            </div> 
        </div>
    )
}