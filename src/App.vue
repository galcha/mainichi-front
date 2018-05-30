<template>
    <div class="main">
        <div class="container-centered">
            <h1>毎日.<span>Mainichi</span><div class="bar"></div></h1>
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

        &.isLoading {
            height: 1%;
        }
    }

    h1 {
        flex: 1 100%;
        text-align: center;
        font-size: 100px;
        padding:0;
        margin:0;
        font-weight:800;
	    color: #333;
        transition: text-shadow 0.2s linear;
        animation: 1s shadow ease-out forwards;
        animation-delay: 0.5s;

        span {
            font-size: 25px;
            display: block;
            text-shadow: none;
            color: black;
            font-family: 'Poiret One', cursive;
            position: relative;
            top: -20px;
            left: 51%;
            width: 100px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .bar {
            transform: rotate(45deg);
            border-bottom: 1px solid #333;
            width: 15px;
            position: relative;
            top: -30px;
            left: 10px;
            margin-left: auto;
            margin-right: auto;
            animation: 1.5s ease-out bar;
            animation-delay: 1s;
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

    @keyframes bar {
        0% {
            border-bottom: 1px solid #ffab00;
        }
        50% {
            border-bottom: 1px solid #eb008f;

        }
        100% {
            border-bottom: 1px solid #777;
        }
    }

    @keyframes shadow {
        0% {
            text-shadow: 0px 0px 0px #000;
        }
        50% {
            text-shadow: 3px 2px 0px #d07500;
        }
        100% {
            text-shadow: 3px 2px 0px #ff009b;
        }
    }
</style>
