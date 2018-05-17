<template>
    <div class="main">
        <div class="container-centered">
            <h1>毎日<span>Mainichi</span></h1>
            <router-view/>

        </div>
        <footer class="footer">
            <div>
                Mainichi *
                <span class="legend">Daily japanese word, for every level !</span>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
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
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background: linear-gradient(148deg, #ebbaeb, #fffba7) !important;
    }

    h1 {
        flex: 1 100%;
        text-align: center;
        font-size: 90px;
        padding:0;
        margin:0;
        font-weight:800;
        text-shadow: 3px 2px 0px #ff009b;
        color: #444;

        span {
            font-size: 40px;
            display: block;
            text-shadow: none;
            color: #eb0084;
            font-family: 'Poiret One', cursive;
        }
    }

    .footer {
        height:50px;
        background: linear-gradient(128deg, #eb008f, #ffd000) !important;
        color:white;
        font-size: 30px;
        padding-left:20px;
        font-family: 'Poiret One', cursive;

        div {
            position: relative;
            top: 8px;
        }
    }

    .legend {
        font-family: 'Raleway';
        font-size: 15px;
    }

    @media screen and (max-width: 640px) {
        .legend {
            display:none;
        }

        h1 {
            display: none;
        }
    }
</style>
