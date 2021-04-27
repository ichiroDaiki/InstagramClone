import React, { Fragment } from 'react'
import HistoryProfile from './HistoryProfile'
import PostFooter from './Post/PostFooter'
import PostImg from './Post/PostImg'

const PostComponent = () => {
    return ( 

        <div>

            <div className="post-header">
                <div className="post-header-userInfo">
                    <HistoryProfile dstyles="ig-post-main-photo" historyimg="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/159455470_493739745115697_8836920868558474860_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=tT5kvugeMisAX9FOvZF&edm=ABfd0MgAAAAA&ccb=7-4&oh=06bb9cd39d40f4a9fbf28e1445e0aeab&oe=60A7CFD4&_nc_sid=7bff83" />
                    <h1>arilaviee</h1>
                </div>
                <div className="post-header-settings">
                    <div className="p-h-s-icon">
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>
            
            <div className="post-img">
                <PostImg pstyles="" urlimg="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/175798840_792633305015170_5746807918289258963_n.jpg?tp=1&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_cat=1&_nc_ohc=brf5Q6bR3A0AX92Hu9B&edm=APU89FAAAAAA&ccb=7-4&oh=c8910b65fa7059a2f2e40ef2fdb10578&oe=60A7A259&_nc_sid=86f79a"/>
                <PostFooter/>
            </div>

        </div>

     );
}
 
export default PostComponent;