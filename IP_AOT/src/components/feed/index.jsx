import React, { useState } from "react";
import FeedPost from "../common/feedPost";
import LazyLoad from 'react-lazyload';
import feedPosts from "./../../data/feedPosts.json"
import { Select, ConfigProvider } from "antd";
import { IoIosArrowDown } from "react-icons/io";

export default function Feed() {

    const [filterValue, setFilterValue] = useState("newest");

    const handleFilter = (value) => {
      setFilterValue(value);
    }

    return (
        <div className="flex flex-col w-full items-center mt-[150px]">
            <div className="w-[600px]">

            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    "selectorBg" : "#212130",
                    "optionSelectedBg" : "#2B2B3E",
                    "optionSelectedColor" : "#E4DFED",
                    "optionActiveBg" : "transparent",
                    "colorBgElevated" : "#212130",
                    "colorText" : "#E4DFED",
                    "colorTextPlaceholder" : "#E4DFED",
                    "optionSelectedFontWeight" : "bold",
                    "colorIconHover" : "#E4DFED",
                    "colorIcon" : "#E4DFED"

                  },
                },
              }}
            >
              <Select 
                className="mb-5 ml-5"
                placeholder="Sort by"
                defaultValue={'newest'}
                variant="borderless"
                suffixIcon={<IoIosArrowDown color="#E4DFED"/>}
                size="large"
                onChange={handleFilter}
                options={
                  [
                    { value: 'newest', label: <span>Newest</span> },
                    { value: 'topest', label: <span>Topest</span> },
                    { value: 'oldest', label: <span>Oldest</span> }  
                  ]
                } />
          </ConfigProvider>
              
            </div>
            <div className="w-[600px] grid grid-cols-1 grid-rows-auto gap-6 px-5">
                {
                    feedPosts.sort((post1,post2) => 
                        filterValue === "newest" ? post1.dateCreated - post2.dateCreated : 
                        filterValue === "oldest" ? post2.dateCreated - post1.dateCreated :
                        post2.numberOfComments - post1.numberOfComments
                      ).map((post) => 
                        <LazyLoad key={post.id}>
                            <FeedPost 
                                id={post.id}
                                verified={post.verified}
                                community={post.community}
                                contentText={post.contentText}
                                profileImg={post.profileImg}
                                postImg={post.postImg}
                                numberOfComments={post.numberOfComments}
                            />
                        </LazyLoad>
                    )
                }
            </div>
        </div>
    )
}