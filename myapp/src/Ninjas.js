import React, {Component} from 'react';

class Ninjas extends Component {
    render() {
        const {name, age, belt} = this.props;
        console.log(this.props);
        return (
            <div className="ninjas">

                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Belt: {belt}</div>

                {/* <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                <div>Belt: {this.props.belt}</div> */}
            </div>

        );
    }
}

export default Ninjas;