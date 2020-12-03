<template>
    <div class="home">
        <h1>Welcome to a Galaxy of Starships</h1>
        <hr>
        <table>
            <tr>
                <th><img src="/images/deathstar.jpeg"></th>
                <th>The galaxy was full of starships belonging to various factions. These ships came in all shapes and sizes, from small fighters to massive capital ships.  We may only have a small collection of starfighter now, but you can help!</th>
            </tr>
            <tr>
                <th id="explore">You can add your favorite ships to our collection, so that others can see and comment on the ship.  Every ship that gets added helps expand our galaxy and brings us one step closer to having every ship.</th>
                <td><img src="/images/falcon.jpg"></td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    .home {
        min-height: 87.5vh;
    }

    h1 {
        padding-top: 15px;
    }

    hr {
        margin-bottom: 15px;
        border: 2px solid darkred;
        width: 95%;
        margin: auto;
    }

    th {
        width: 45vh;
        text-align: left;
        padding: 5px;
    }

    #explore {
        width: 45vh;
        text-align: right;
        padding: 5px;
    }

    table {
        width: 80%;
        padding: 5px;
        margin: auto;
        min-height: 30vh;
    }

    img {
        width: 90%;
        border: 5px solid;
        border-color: whitesmoke;
        object-fit: cover;
        min-height: 30vh;
    }

    @media only screen and (max-width: 420px) {
        th {
            font-size: 10px;
        }

        h1 {
            font-size: 20px;
        }
    }

</style>
