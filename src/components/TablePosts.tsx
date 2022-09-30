import React, {Component, useRef} from 'react';
import {IPosts} from "../types/posts";
import posts from '../data/posts.json'
import PrintPost from "./PrintPost";

type TProps = {
    userId: number;
}

// export class TablePosts extends Component<TProps> {
//     posts: IPosts[];
//
//     constructor({userId}: TProps) {
//         super({userId});
//
//         this.posts = [];
//     }
//
//     postsInit = () => {
//         this.addPosts(posts)
//     }
//
//     addPosts = (posts : any) => {
//         for(let field in posts) {
//             const { userId, id, title, body } = posts[field]
//
//             this.posts.push({
//                 userId,
//                 id,
//                 title,
//                 body
//             } as IPosts);
//         }
//     }
//
//     printPost = () => {
//         return(
//             <div>
//                 {this.posts.map(post => <PrintPost post={post}/>)}
//             </div>
//         )
//     }
//
//     render() {
//         this.postsInit();
//
//         return (
//             this.printPost()
//         );
//     }
// }


const TablePosts = ({userId}: TProps) => {

    return (
        <div>
            {/*{*/}
            {/*    posts.map(post => {*/}
            {/*        if (userId === post.userId){*/}
            {/*            <PrintPost post={post} key={post.id}/>*/}
            {/*        }*/}
            {/*    })*/}
            {/*}*/}
        </div>
    );
};

export default TablePosts;
