<template>
    <div class="content">
        <div class="kanji">
            <span>{{ word.japanese[0].word }}</span>
        </div>

        <div class="translation">
            <div class="kana text-md-left">
                <span>{{ word.japanese[0].reading }}</span>
            </div>

            <div class="english text-md-left">
                <span v-for="(englishWord, index) in word.senses[0].english_definitions">{{ englishWord }}<span
                        v-if="index !== word.senses[0].english_definitions.length - 1">, </span></span>
            </div>
        </div>

        <div class="another">
            <div>
                <i class="material-icons">autorenew</i>Refresh <span>もう一つ</span>
            </div>
            <div>
                <i class="material-icons">history</i>History <span>歴史</span>
            </div>
        </div>
    </div>
</template>

<script>
    import request from '../services/Request'

    export default {
        data() {
            return {
                word: null
            }
        },
        created: function () {
            request
                .fetchWord()
                .then(response => {
                    this.word = response;
                })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .kanji {
        font-size: 60px;
    }

    .kana {
        font-family: "Hannari";
        font-size: 35px;
    }

    .english {
        font-size: 25px;
    }

    .content {
        display: flex;
    }

    @media screen and (max-width: 640px) {
        .content {
            flex-direction: column;
        }

    }

    .translation {
        margin-left: 30px;
    }

    .another {
        margin-left: 50px;
        padding: 10px;
    }

    .another div {
        padding:5px;
        transition: all;
        transition-duration: 0.2s;
    }

    .another div:hover {
        background: linear-gradient(128deg, #eb008f, #ffd000) !important;
    }

    .another span {
        font-size: 12px;
        color: #666;
    }
</style>
