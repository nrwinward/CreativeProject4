<template>
    <div class="home">
        <h1>Welcome to a catalog of Starships in Star Wars</h1>
        <hr>
        <table>
            <tr>
                <th><img src="/images/deathstar.jpeg"></th>
                <th>We are here to help you learn more about the starships that were used by the Empire and Rebellion. These ships come in all shapes and sizes and there is much to learn about each one. While this website may provide just an overview to the many ships and fighters that participated in the war, it is a great place to start.</th>
            </tr>
            <tr>
                <th id="explore">As you explore the starships page, be sure to look for the favorite button. Once you have added a starship to your favorites, you can view it on the Favorites page. This page will show you more details about the ships you have selected, so be sure to check it out.</th>
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
