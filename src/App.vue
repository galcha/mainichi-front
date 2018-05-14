<template>
    <div class="main">
        <div class="container-centered">
            <router-view/>

        </div>
        <footer class="footer">
            Mainichi *
            <span class="legend">Daily japanese word, for every level !</span>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    html {
        height: 100%;
    }

    body {
        font-family: "Mplus 1p", "Raleway";
        margin: 0;
        height: 100%;
    }

    .main {
        height: 100%;
    }

    .container-centered {
        height: calc(100% - 50px);
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(148deg, #ebbaeb, #fffba7) !important;

    }

    .footer {
        height:50px;
        background: linear-gradient(128deg, #eb008f, #ffd000) !important;
        color:white;
        font-size: 30px;
        padding-left:20px;
        font-family: 'Gamja Flower', cursive;
    }

    .legend {
        font-family: 'Raleway';
        font-size: 15px;
    }
</style>
