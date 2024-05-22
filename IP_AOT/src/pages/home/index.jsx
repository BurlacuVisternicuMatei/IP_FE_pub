import Feed from "../../components/feed/"
import CommunityHomePage from "../../components/communityHomePage"
import {} from "@fortawesome/react-fontawesome"
import Header from "../../components/header"

export default function Home() {
    return (
        <>
            <Header/>
            <div className="flex w-full h-full justify-center p-5">
                <CommunityHomePage/>
                <Feed/>
            </div>
        </>
    )
}