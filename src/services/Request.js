import axios from 'axios'

export default {
    fetchWord(offset) {
        return axios.get(process.env.API_ROOT + 'word/?offset=' + offset)
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