<template>
    <div class="starships">
        <h1>Galaxy of Starships</h1>
        <hr>
        <section class="shipList">
            <div class="image" v-for="ship in ships" :key="ship.id">
                <h2>{{ship.title}}</h2>
                <img :src="ship.path" />
                <div class="info">
                    <p>{{ship.description}}</p>
                </div>
                <hr class="divide">
                <div class="comments" v-for="c in ship.comments" :key="c.id">
                    <p id="comment">{{c.comment}}</p>
                    <p id="user">- <em>{{c.user}}</em></p>
                    <hr class="divide">
                </div>
                <button @click="newComment(ship)">Comment</button>
                <div class="form" v-if=ship.addComment>
                    <table>
                        <tr>
                            <textarea v-model="comment" placeholder="Write your comment here" :name="'comment' + ship.id"></textarea>
                        </tr>
                        <tr>
                            <input v-model="user" placeholder="Name" :name="'user' + ship.id">
                        </tr>
                    </table>
                    <button @click="addComment(ship)">Submit</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Starships',
        data() {
            return {
                ships: [],
                user: "",
                comment: "",
                comments: [],
            }
        },
        created() {
            this.getShips();
        },
        computed: {
            
        },
        methods: {
            newComment(ship) {
                ship.addComment = true;
            },
            async getShips() {
                try {
                    let response = await axios.get("/api/ships");
                    this.ships = response.data;
                    return true;
                } catch (error) {
                    //console.log(error);
                }
            },
            async addComment(ship) {
                try {
                    ship.addComment = false;
                    await axios.put("/api/comments/" + ship._id, {
                        //user: document.querySelector("input[name='user' + ship.id]").value,
                        //comment: document.querySelector("textarea[name='comment' + ship.id]").value,
                        user: this.user,
                        comment: this.comment,
                    });
                    this.getShips();
                    this.user = "";
                    this.comment = "";
                    return true;
                } catch (error) {
                    //console.log(error);
                }
            },
        }
    }

</script>

<style scoped>
    .shipList {
        margin-top: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    img {
        width: 400px;
        height: 200px;
        border: 5px solid;
        border-color: whitesmoke;
        object-fit: cover;
        min-height: 30vh;
    }

    .image {
        margin: 10px;
        width: 410px;
        background: #8b0000;
    }

    .ship .image {
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }

    .info {
        color: whitesmoke;
        padding: 5px 5px;
        height: 40px;
    }

    p {
        text-align: left;
    }
    
    .form {
        margin-bottom: 5px;
    }
    
    table, tr {
        width: 100%;
        padding: 0px;
        margin: 0px;
    }
    
    input,
    textarea {
        width: 95%;
        margin: auto;
        color: black;

    }
    button {
        width: 30%;
        color: black;
        float: right;
        margin: 5px;
    }
    
    #comment {
        padding-left: 5px;
    }
    
    #user {
        width: 95%;
        text-align: right;
    }

</style>
