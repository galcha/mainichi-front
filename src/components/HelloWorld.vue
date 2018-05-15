<template>
    <div class="content" v-if="word != null">
        <div class="kanji">
            <span>{{ word.original }}</span>
        </div>

        <div class="translation">
            <div class="kana text-md-left">
                <span>{{ word.originalReading }}</span>
            </div>

            <div class="english text-md-left">
                <span v-for="(englishWord, index) in word.translation">

                    <span v-if="index == 0">{{ englishWord }}</span>

                    <ul class="english-more" v-if="word.translation.length > 1">
                        <li v-if="index !== 0">{{ englishWord }}</li>
                    </ul>
                </span>
            </div>
        </div>

        <div class="another">
            <div class="refresh" v-on:click="refresh">
                <i class="material-icons">autorenew</i>Refresh <span>もう一つ</span>
            </div>
            <div class="history">
                <i class="material-icons">history</i>History <span>歴史</span>
            </div>
        </div>
    </div>
</template>

<script>
    import request from '../services/Request'

    export default {
        data() {
            var offset = localStorage.getItem('offset');
            if(offset === 'undefined') {
                offset = 0;
            }

            return {
                word: null,
                offset: offset
            }
        },
        created: function () {
            request
                .fetchWord(this.offset)
                .then(response => {
                    this.word = response;
                })
        },
        methods: {
            refresh: function (event) {
                request
                    .fetchWord(++this.offset)
                    .then(response => {
                        this.word = response;
                        localStorage.setItem('offset', this.offset)
                    });

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

    .translation {
        margin-left: 30px;
    }

    .another {
        margin-left: 50px;
        padding: 10px;

        div {

            padding: 5px;

            &:hover {
                background: linear-gradient(128deg, #eb008f, #ffd000);
                border-radius: 40px;
            }
        }

        span {
            padding-left: 5px;
            font-size: 12px;
            color: #666;
        }
    }

    @media screen and (max-width: 640px) {
        .content {
            flex-direction: column;
            align-items: center;
        }

        .translation {
            margin-left: 0;
            text-align: center;
        }

        .another {
            margin-left: 0;
            margin-top: 20px;
            padding: 0;
        }
    }

    .refresh, .history {
        cursor: pointer;
        display: flex;
        align-items: center;

        i {
            padding-right: 5px;
        }
    }

    .english-more {
        font-size: 12px;
        color: #777;
        list-style-type: none;
        margin:0;
        padding:1px;
    }
</style>
