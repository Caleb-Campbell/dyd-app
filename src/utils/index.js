import axios from "axios"
import { headers } from "../../config"



// const registerNewUser = () => {
    
// }

export const sendNewPost = ({id, title, description, img}) => {

    const newPost = {
        "post_id": id,
        "post_title": title,
        "post_description": description,
        "post_img": img
      }
    axios.post('https://parseapi.back4app.com/classes/post', newPost, headers)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}

export const getPosts = () => {
    axios.get('https://parseapi.back4app.com/classes/post', headers)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}