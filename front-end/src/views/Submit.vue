<template>
    <div class="submit">
        <h1>Submit a New Ship</h1>
        <hr>
        <div class="add">
            <div class="form">
                <table>
                    <tr>
                        <input v-model="title" placeholder="Title">
                    </tr>
                    <tr>
                        <textarea v-model="description" placeholder="Add a description here"></textarea>
                    </tr>
                    <tr>
                        <input id="inputPhoto" type="file" name="photo" @change="fileChanged">
                        <button @click="upload">Upload</button>
                    </tr>
                </table>
            </div>
            <div class="upload" v-if="addShip">
                <h2>{{addShip.title}}</h2>
                <img :src="addShip.path" />
                <p>{{addShip.description}}</p>
            </div>
        </div>
        <h1>Edit or Delete a Ship</h1>
        <hr>
        <div class="edit">
            <div class="form">
                <input v-model="findTitle" placeholder="Search">
                <div class="suggestions" v-if="suggestions.length > 0">
                    <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectShip(s)">{{s.title}}
                    </div>
                </div>
            </div>
            <hr id="hrEdit">
            <div class="upload" v-if="findShip">
                <table>
                    <tr>
                        <input v-model="findShip.title">
                    </tr>
                    <img :src="findShip.path" />
                    <tr>
                        <textarea v-model="findShip.description" />
                    </tr>
                </table>
            </div>
            <div class="actions" v-if="findShip">
                <button @click="deleteShip(findShip)">Delete</button>
                <button @click="editShip(findShip)">Edit</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'submit',
        data() {
            return {
                title: "",
                description: "",
                file: null,
                addShip: null,
                ships: [],
                findTitle: "",
                findShip: null,
            }
        },
        created() {
            this.getShips();
        },
        computed: {
            suggestions() {
                let ships = this.ships.filter(ship => ship.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
                return ships.sort((a, b) => a.title > b.title);
            }
        },
        methods: {
            fileChanged(event) {
                this.file = event.target.files[0]
            },
            async upload() {
                try {
                    const formData = new FormData();
                    formData.append('photo', this.file, this.file.name)
                    let r1 = await axios.post('/api/photos', formData);
                    let r2 = await axios.post('/api/ships', {
                        title: this.title,
                        description: this.description,
                        path: r1.data.path
                    });
                    this.addShip = r2.data;
                    this.getShips();
                } catch (error) {
                    //console.log(error);
                }
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
            selectShip(ship) {
                this.findTitle = "";
                this.findShip = ship;
            },
            async deleteShip(ship) {
                try {
                    await axios.delete("/api/ships/" + ship._id);
                    this.findShip = null;
                    this.getShips();
                    return true;
                } catch (error) {
                    //console.log(error);
                }
            },
            async editShip(ship) {
                try {
                    await axios.put("/api/ships/" + ship._id, {
                        title: this.findShip.title,
                        description: this.findShip.description
                    });
                    this.findShip = null;
                    this.getShips();
                    return true;
                } catch (error) {
                    //console.log(error);
                }
            },
        }
    }

</script>

<style scoped>
    .submit {
        min-height: 87.5vh;
    }

    .add, .edit {
        padding-top: 15px;
        margin: auto;
        width: 60%;
    }

    table {
        width: 100%;
    }

    input,
    textarea {
        width: 100%;
        margin: auto;
        color: black;

    }

    #inputPhoto {
        width: 70%;
        float: left;
        color: whitesmoke;
    }

    button {
        float: right;
        color: black;
    }

    .upload {
        width: 100%;
        margin: auto;
    }
    
    .suggestions {
        text-align: left;
        background-color: whitesmoke;
        color: black;
    }
    
    .suggestion {
        border: 1px solid #151a22;
    }
    
    #hrEdit {
        width: 100%;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    img {
        width: 98%;
        border: 5px solid;
        border-color: whitesmoke;
        object-fit: cover;
        min-height: 30vh;
    }

    p {
        text-align: left;
    }
    
    .actions {
        padding-bottom: 30px;
    }

</style>
