import React, { Component } from "react";
import axios from 'axios';

//connect component to redux
import { connect } from 'react-redux';


class SinglePost extends Component {
    // state = {
    //     post: null
    // }

    // componentDidMount() {
    //     console.log("SINGLE POST PROPS: ", this.props); //we automatically props in class based component from the route

    //     //let id = this.props.match.params.post_id;
    //     // this.setState({
    //     //     id: id
    //     // })

    //     axios.get('https://jsonplaceholder.typicode.com/posts/2')
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             })

    //             console.log("RESPOND FROM SINGLE POST API ", res);
    //         })
    // }

    render() {
        // const post = this.state.post ? (

        const post = this.props.post ? (
            <div className="post">
                {/* <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p> */}

                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>

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
//function to map state to props

const mapStateToProps = (state, ownProps) => { //we take a second parameter called ownProps

    //ownProps have info about the post from the rout
    let id = 1;
    //ownProps.match.params.post_id;

    //we retrun the object
    return {
        // post: state.posts.find((post) => {
        //     return post.id === id 
        // }) is the same as one below

        post: state.posts.find(post => post.id === id)
    }

}

export default connect(mapStateToProps)(SinglePost)