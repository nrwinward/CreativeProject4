<template>
    <div id="app">
        <div id="nav">
            <ul>
                <li><img id="logo" src="/images/emblem.png" width=40px;></li>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/Starships">Starships</router-link>
                </li>
                <li>
                    <router-link to="/Favorites">Favorites</router-link>
                </li>
            </ul>
        </div>
        <router-view />
        <footer class="footer">
            <a href="https://github.com/nrwinward/CProject">GitHub</a>
        </footer>
    </div>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: whitesmoke;
    }

    * {
        padding: 0px;
        margin: 0px;
    }


    body {
        background-color: #151a22;
        margin: 0px;
        padding: 0px;
        width: 100%;
    }

    #logo {
        padding: 5px;
    }
    #nav {
        background-color: #343a40;
        width: 100%;
        margin: 0px;
    }

    #nav a {
        font-weight: bold;
        color: whitesmoke;
        display: block;
        padding: 15px;
        margin: 0px;
        text-decoration: none;
    }

    #nav ul {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        padding-left: 15px;
        display: flex;
    }

    #nav a.router-link-exact-active {
        background-color: #343a40;
        color: #b9b9b9;
    }

    .footer {
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #343a40;
        text-align: center;
        padding-top: 5px;
        margin: 0px;
    }

    h1 {
        padding-top: 15px;
        margin: 0px;
    }

    hr {
        margin-bottom: 15px;
        border: 2px solid darkred;
        width: 95%;
        margin: auto;
    }

</style>
