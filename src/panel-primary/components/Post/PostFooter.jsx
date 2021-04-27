import React from 'react';
import './css/PostFooter.css';

const PostFooter = () => {
    return ( 

        <div>
            
            <div className="post-footer-touchable">
                <div>
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment fa-flip-horizontal"></i>
                    <i class="far fa-paper-plane"></i>
                </div>

                <div>
                    <i class="far fa-bookmark"></i>
                </div>
            </div>

            <div className="post-likes">
                <span>65,885 Me gusta</span>
            </div>

            <div className="post-name-comment">
                <a>arilaviee 🤫</a>
            </div>

            <div className="post-time">
                <h1>HACE UN DÍA</h1>
            </div>



            <div class="control has-icons-left has-icons-right post-do-comment">
                <input class="input is-medium " type="text" placeholder="Agrega un comentario..."/>
                <span class="icon is-medium is-left">
                    <i class="far fa-grin"></i>
                </span>
                <span class="icon is-medium is-right text-p">
                    Publicar
                </span>
            </div>

        </div>

     );
}
 
export default PostFooter;