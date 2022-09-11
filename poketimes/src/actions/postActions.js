//Action fuction to delete post
//we export it first

export const deletePost = (id) => {
    //returns an object
    return {
        type: 'DELETE_POST',
        id: id
    }

}