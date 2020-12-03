<template>
    <div class="wrapper">
        <div class="starred">
            <div v-for="ship in ships" :key="ship.id">
                <div v-if=ship.starred>
                    <div class="ship">
                        <div class="image">
                            <img :src="'../images/'+ship.image">
                        </div>
                        <div class="info">
                            <table>
                                <tr>
                                    <td>
                                        <h2>{{ship.name}}</h2>
                                        <p>{{ship.model}}</p>
                                    </td>
                                    <td class="favorite">
                                        <div v-if=ship.starred>
                                            <img id="star" @click="star(ship)" src="/images/starFilled.png">
                                        </div>
                                        <div v-else>
                                            <img id="star" v-on:click="star(ship)" src="/images/starEmpty.png">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="madeBy">
                                        <p>Made by {{ship.manufacturer}}</p>
                                        <p>Class: {{ship.starship_class}}</p>
                                        <p>Cost: {{ship.cost_in_credits}} credits</p>
                                    </td>
                                    <td>
                                        <p>Speed in Atmosphere: {{ship.max_atmosphering_speed}}km/h</p>
                                        <p>Hyperdrive Rating: {{ship.hyperdrive_rating}}</p>
                                        <p>Crew Size: {{ship.crew}}</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StarredList',
        props: {
            ships: Array
        },
        methods: {
            star(ship) {
                if (ship.starred) {
                    ship.starred = false;
                } else {
                    ship.starred = true;
                }
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .starred {
        margin-top: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
    }

    .ship {
        margin: 10px;
        width: 410px;
    }

    .ship img {
        width: 400px;
        height: 200px;
        border: 5px solid;
        border-color: whitesmoke;
        object-fit: cover;
    }

    .ship .image {
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }

    .info {
        background: #8b0000;
        color: whitesmoke;
        padding: 5px 5px;
        height: 80px;
    }

    .info h2 {
        font-size: 16px;
        margin: 0px;
        display: flex;
    }

    .info p {
        text-align: left;
        margin: 0px;
        font-size: 10px;
        display: flex;
    }

    .info table {
        width: 100%;
        margin: 0px;
        padding-top: 0px;
    }

    .info td {
        margin: 0px;
    }


    .favorite {
        float: right;
        margin: 0px;
        padding: 0px;
        width: 40px;
        height: 40px;
    }

    #madeBy {
        width: 230px;
    }

    .auto {
        margin-left: auto;
    }

    #star {
        width: 30px;
        height: 30px;
        object-fit: cover;
        background-color: darkred;
        border: 0px;
        padding: 5px;
    }

    @media only screen and (max-width: 420px) {
        .ship {
            margin: 10px;
            width: 210px;
        }

        .ship img {
            width: 200px;
            height: 100px;
            border: 5px solid;
            border-color: whitesmoke;
            object-fit: cover;
        }

        #madeBy {
            width: 120px;
        }

        .info p {
            font-size: 7.5px;
            display: flex;
        }

        .info h2 {
            font-size: 14px;
            margin: 0px;
            display: flex;
        }
    }

</style>
