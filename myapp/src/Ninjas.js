import React from 'react';

const Ninjas = (props) => {
        const {ninjas} = props;
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
}

export default Ninjas;