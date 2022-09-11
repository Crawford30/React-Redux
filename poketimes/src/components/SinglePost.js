import React, { Component } from "react";
import axios from 'axios';

//connect component to redux
import { connect } from 'react-redux';

//import the deletepost function 
import { deletePost } from '../actions/postActions';


class SinglePost extends Component {

    handleClick = () => {
        //This will go to the root reducer
        this.props.deletePost(this.props.post.id);

        //we need to redirect the user
        this.props.history.push('/');
    }
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

        console.log("PROPS OS DELETE: ", this.props);
        // const post = this.state.post ? (

        const post = this.props.post ? (
            <div className="post">
                {/* <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p> */}

                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>

                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>

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

//=====TO DELETE POST, we mapdispatch to the props
const mapDispatchToProps = (dispatch) => {
    //we map dispatchTostore like store.dispatch({type: }) but now we have t do it to the props

    return {
        //we send the delete action and dispatch an action
        // deletePost: (id) => { ///the deletePost will be attached to our props to be used in the component

        //     //When we are dispatching an action here, its being created directly
        //     // dispatch({ type: 'DELETE_POST', id: id })

        //     //we use the imported function to delete post
        //     dispatch({ type: 'DELETE_POST', id: id })
        // }

        deletePost: (id) => { dispatch(deletePost(id)) }
    }



}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)