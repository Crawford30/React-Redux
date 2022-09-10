import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {

    //create a state to store the data
    state = {
        posts: []
    }


    componentDidMount() {
        //this get request is asynchronous, meaning it takes sometime to get the data, and it retrurns a promise,  a promise means the action will complete in some point in time
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log("RESPOND FROM API ", res);

                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })

    }
    render() {

        //using destructuring



        // you r correct const posts = this.state.posts,
        // now when we do this with destructuring const { posts } = this.state 
        // which is essentially equal to const { posts } = { posts :[ ] }
        // ......now u see its like we r comparing and setting the term constant to "posts:[ ]"
        // ..destructuring is really handy...

        const { posts } = this.state;

        //Check if we have  post
        const postList = posts.length ? (
            //if we have posts, we cycle thru it

            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">
                                {post.title}
                            </span>
                            <p>{post.body}</p>
                        </div>

                    </div>
                )
            })

        ) : (
            //if we dont have a post
            <div className="center">No Post yet</div>


        )

        return (
            <div className="contaner" >

                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home



// import React from 'react';

// const Home = () => {
//     return (
//         <div className="contaner">

//             <h4 className="center">Home</h4>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque fuga deserunt incidunt facere at corrupti expedita beatae molestiae porro doloribus, ex ea eligendi repellat minima eius dignissimos praesentium ratione voluptate!
//                 Cupiditate nisi dicta, ullam dolore architecto, doloribus assumenda incidunt blanditiis reiciendis accusamus nostrum vel consectetur id eaque sapiente recusandae in numquam nesciunt iure dolorum ipsa laudantium inventore? Omnis, mollitia ipsam!
//                 Earum temporibus rem inventore possimus deleniti veritatis nam voluptas recusandae quis illum dolore ut necessitatibus, sint corporis optio delectus reiciendis libero in. A, porro nostrum ratione ipsa eum beatae natus?
//                 Accusantium minima iste iure quod fugit illum alias earum voluptate assumenda. Deserunt ex unde, at fugiat excepturi amet sed, consectetur perferendis tenetur voluptates ad architecto accusamus quas soluta. Asperiores, nihil.
//                 Quas qui amet eum consequatur quae harum maxime distinctio sunt, nisi ad sit incidunt autem saepe velit, consequuntur, ducimus officiis hic recusandae quo quisquam ipsum! Debitis quasi libero cumque asperiores.
//                 Quae in dolorum sed necessitatibus inventore ad. Animi alias unde necessitatibus esse, incidunt reprehenderit architecto. Suscipit officia et incidunt, in inventore tenetur alias, dicta adipisci deserunt repellat voluptatum explicabo optio!
//                 Ipsa optio ratione quibusdam et temporibus neque. Fugit laudantium iure voluptas cum incidunt magni, vel ratione molestiae laborum, voluptatum, odit nihil porro aliquid eius error sit consequuntur. Omnis, ullam iure!
//                 Sit praesentium harum quidem magnam dicta quia eum itaque velit. Exercitationem, sequi. In pariatur ipsa blanditiis temporibus distinctio sunt. Necessitatibus reiciendis nostrum eligendi minus quos fugiat dolor incidunt. Accusamus, quam!
//                 Reprehenderit accusantium eum, sunt hic illo aspernatur porro voluptas placeat et, iure culpa debitis ut labore at blanditiis vel ea! Enim unde adipisci doloribus molestiae nemo provident. Dolorum, neque at!
//                 Eos debitis error, reiciendis commodi dolorum, blanditiis ad perspiciatis nemo asperiores aperiam quae ex non temporibus? Neque, fugiat. Qui dolorem enim culpa, repudiandae obcaecati aliquam quia aperiam ipsum in eaque?</p>
//         </div>
//     )
// }

// export default Home