import React, { Component } from "react";
import axios from 'axios';


class SinglePost extends Component {
    state = {
        post: null
    }

    componentDidMount() {
        console.log("SINGLE POST PROPS: ", this.props); //we automatically props in class based component from the route

        //let id = this.props.match.params.post_id;
        // this.setState({
        //     id: id
        // })

        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then(res => {
                this.setState({
                    post: res.data
                })

                console.log("RESPOND FROM SINGLE POST API ", res);
            })



    }

    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>

            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }

}

export default SinglePost