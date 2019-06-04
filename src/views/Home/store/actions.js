import axios from 'axios'

export const getHomeList = () => {
    return () => {
        axios.get('http://127.0.0.1/home/list')
            .then(res => {
                console.log(res)
            })
    }
}
