import FeedPost from "../../components/common/feedPost";
import CommentsSection from "../../components/commentsSection";
import { useSearchParams } from "react-router-dom";
import feedPosts from "../../data/feedPosts.json"

export default function ThreadPage() {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");

    return (
        <>
            {
                feedPosts.map((post) => {
                    if(post.id == id)  
                        return <div key={post.id}>
                            <FeedPost
                                id={post.id}
                                verified={post.verified}
                                community={post.community}
                                profileImg={post.profileImg}
                                contentText={post.contentText}
                                postImg={post.postImg}
                                numberOfComments={post.numberOfComments}
                            />
                            <CommentsSection data={post.comments}/>
                        </div>
                    }
            )
            }
       
        </>
    )
}