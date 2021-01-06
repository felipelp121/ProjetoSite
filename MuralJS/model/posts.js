module.exports = {

    posts: [
        {
            id: "teste1",
            title: "mural1",
            description: "evento1"
        }
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateID(),title,description});
    }

}

function generateID(){
    return Math.random().toString(36).substr(2, 9);
}