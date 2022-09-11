const initState = {
    posts: [
        { id: 1, title: 'The Fast Food', body: 'ddffgbdbfbvbvfsbsgb' },
        { id: 2, title: 'The Fast Food 2', body: 'b bbnnb  bbnbcbnc   b ' },
        { id: 3, title: 'The Fast Food 3', body: 'nbncncn bgfgfgfh  fgfgfgfgn ' },
    ],
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    //CHECK THE THE TYPE OF ACTION
    if (action.type === "DELETE_POST") {
        //we update thw state, BUT we dont want to do anything destructive, we use the filter method
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });

        //we return a new object which represent the new state
        return {
            ...state,
            posts: newPosts
        }

    }
    return state;
}

export default rootReducer