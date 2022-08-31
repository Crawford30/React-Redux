import React, {Component} from 'react';

class Ninjas extends Component {
    render() {
        const {name, age, belt} = this.props;
        // const ninjas = this.props.ninjas;

        const {ninjas} = this.props;

        console.log(this.props);

        const ninjaList = ninjas.map(ninja => {
            return (
                <div className="ninjas" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>

            )
        })


        return (
            <div className="list-item">
                {ninjaList}
            </div>
        )
        // return (
        //     <div className="ninjas">

        //         <div>Name: {name}</div>
        //         <div>Age: {age}</div>
        //         <div>Belt: {belt}</div>

        //         {/* <div>Name: {this.props.name}</div>
        //         <div>Age: {this.props.age}</div>
        //         <div>Belt: {this.props.belt}</div> */}
        //     </div>

        // );
    }
}

export default Ninjas;