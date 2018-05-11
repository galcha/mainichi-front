import axios from 'axios'

export default {
    fetchWord() {
        return axios.get('http://localhost:8000/word/').then(response => response.data)
    }
}