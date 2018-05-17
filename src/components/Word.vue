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
            <div class="history" v-on:click="showHistory = !showHistory">
                <i class="material-icons">history</i>History <span>歴史</span>
            </div>
        </div>
        <modal v-if="showHistory" @close="showHistory = false">
            <h3 slot="header">History</h3>
            <div slot="body" class="history-list">
                <ul>
                    <li v-for="(word, index) in history.slice().reverse()" v-on:click="setCurrentWord(word); showHistory = false;">{{ word.original }} ({{ word.originalReading }}) <span>{{ word.translation[0] }}</span></li>
                </ul>
            </div>
        </modal>
    </div>
</template>

<script>
    import request from '../services/Request'
    import Modal from './Modal.vue'

    export default {
        components: { Modal },
        data() {
            var offset = localStorage.getItem('offset');
            if(offset === 'undefined') {
                offset = 0;
            }

            var history = JSON.parse(localStorage.getItem('history'));
            if(history === 'undefined' || history === null) {
                history = [];
            }

            return {
                word: null,
                history: history,
                showHistory: false,
                offset: offset
            }
        },
        created: function () {
            request
                .fetchWord(this.offset)
                .then(response => {
                    this.word = response;

                    if(this.history.length === 0 || this.history[this.history.length -1].original !== response.original) {
                        this.history.push(response);
                    }
                    localStorage.setItem('history', JSON.stringify(this.history));
                })
        },
        methods: {
            refresh: function (event) {
                request
                    .fetchWord(++this.offset)
                    .then(response => {
                        this.word = response;
                        localStorage.setItem('offset', this.offset);

                        if(this.history[this.history.length -1].original !== response.original) {
                            this.history.push(response);
                        }
                        localStorage.setItem('history', JSON.stringify(this.history));
                    });
            },
            setCurrentWord: function (word) {
                this.word = word;
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
        height:50%;
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

    .history-list {
        max-height: 400px;
        overflow-y: scroll;

        ul {
            margin:0;
            padding:0;
            list-style-type: none;

            li {
                padding: 10px;
                cursor: pointer;

                &:hover {
                    background: linear-gradient(128deg, #eb008f, #ffd000);
                }
            }
        }

        span {
            color: #777;
            font-size: 12px;
        }
    }

</style>
