<template>
    <v-container class="container-centered" grid-list-md text-xs-center>
        <v-layout row wrap justify-center v-if="word">
            <v-flex d-flex xs12 sm2 md2>
                <div class="kanji">
                    <span>{{ word.japanese[0].word }}</span>
                </div>
            </v-flex>
            <v-flex d-flex xs12 sm4 md4>
                <v-layout row wrap >
                    <v-flex d-flex>
                        <v-layout row wrap>
                            <v-flex d-flex xs12>
                                <div class="kana">
                                    <span>{{ word.japanese[0].reading }}</span>
                                </div>
                            </v-flex>
                            <v-flex d-flex xs12>
                                <div class="english">
                                    <span v-for="(englishWord, index) in word.senses[0].english_definitions">{{ englishWord }}<span v-if="index !== word.senses[0].english_definitions.length - 1">, </span></span>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>

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
        text-align:left;
    }

    .english {
        font-size: 25px;
        text-align:left;
    }

    .container-centered {
        display: flex;
        align-items: center;
    }
</style>
