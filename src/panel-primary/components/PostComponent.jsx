import React, { Fragment } from 'react'
import HistoryProfile from './HistoryProfile'
import PostFooter from './Post/PostFooter'
import PostImg from './Post/PostImg'

const PostComponent = () => {
    return ( 

        <div>

            <div className="post-header">
                <div className="post-header-userInfo">
                    <HistoryProfile dstyles="ig-post-main-photo" historyimg="https://i.pinimg.com/originals/00/b2/be/00b2be872b2ac7050c94e14e58609c55.jpg" />
                    <h1>arilaviee</h1>
                </div>
                <div className="post-header-settings">
                    <div className="p-h-s-icon">
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>
            
            <div className="post-img">
                <PostImg pstyles="" urlimg="https://i.pinimg.com/originals/00/b2/be/00b2be872b2ac7050c94e14e58609c55.jpg"/>
                <PostFooter/>
            </div>

        </div>

     );
}
 
export default PostComponent;