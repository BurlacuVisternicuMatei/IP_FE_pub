import communities from "../../data/communities.json"

export default function CommunitiesPage() {

    let indexCommunity = 0;
    return (
            <div className="flex flex-col justify-center items-center h-full w-fit m-auto"> 
                <h1 className="mr-auto mb-2">Top communities</h1>
                <div className="grid grid-cols-4 gap-4">
                    {
                        communities.map((community) => {
                            indexCommunity++;
                            return <div className="flex hover:bg-gray rounded-3xl">
                                <span className="flex h-full w-fit items-center p-5">{indexCommunity}</span>
                                <div className="flex w-fit justify-center h-fit  px-4 py-2">
                                    <img className="m-auto rounded-full w-10 h-10" src={community.img}></img>
                                    <div className="flex flex-col px-5">
                                        <a className="font-bold hover:underline cursor-pointer">{community.communityName}</a>
                                        <span className="font-light">{community.topic}</span>
                                        <span className="font-extralight">{community.members} members</span>
                                    </div>
                                </div>
                            </div>
                            }
                        )
                    }
                </div>
            </div>
    )
}