import React from 'react';

const Ninjas = (props) => {
        const {ninjas} = props;
        // const ninjaList = ninjas.map(ninja => {
        //     if(ninja.age > 20){
        //         return (
        //             <div className="ninjas" key={ninja.id}>
        //             <div>Name: {ninja.name}</div>
        //             <div>Age: {ninja.age}</div>
        //             <div>Belt: {ninja.belt}</div>
        //         </div>
    
        //         )

        //     }else {
        //         return null
        //     }


        const ninjaList = ninjas.map(ninja => {
           return  ninja.age > 20 ? (
            <div className="ninjas" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                 <div>Age: {ninja.age}</div>
                 <div>Belt: {ninja.belt}</div>
            </div>              
           ) : null
           
        });

        return (
            <div className="list-item">
                {ninjaList}
            </div>
        )
}

export default Ninjas;