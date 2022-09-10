import React, { Component } from "react";


class SinglePost extends Component {
    state = {
        id: null
    }

    componentDidMount() {
        console.log("SINGLE POST PROPS: ", this.props); //we automatically props in class based component from the route
        let id = this.props.match.params.post_id;
        this.setState({
            id: id
        })

    }

    render() {
        return (
            <div className="container">
                <h4>Route Parameter: {this.state.id}</h4>
            </div>
        )
    }

}

export default SinglePost