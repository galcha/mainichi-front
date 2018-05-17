import axios from 'axios'

export default {
    fetchWord(offset) {
        return axios.get('http://localhost:8000/word/?offset='+offset)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return {
                    original: "毎日",
                    originalReading: "まいにち",
                    translation: [
                        "Every day"
                    ],
                    wordType: [
                        "Noun"
                    ]
                };
            })
    }
}