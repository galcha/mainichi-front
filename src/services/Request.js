import axios from 'axios'

export default {
    fetchWord() {
        return axios.get('http://localhost:8000/word/')
            .then(response => {
                return response.data
            })
            .catch(error => {
                return {
                    "japanese": [{"word": "針鼠", "reading": "はりねずみ"}],
                    "senses": [{"english_definitions": ["Hedgehog"]}]
                };
            })
    }
}