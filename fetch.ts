import axios from 'axios'
interface Comments {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments'

const getData = (url: string): Promise<Comments[]> => {
  return axios.get(url).then((res) => res.data)
}

getData(COMMENTS_URL).then((comment) =>
  comment.forEach((c) =>
    console.log('ID: ' + c.id.toString() + ', Email: ' + c.email),
  ),
)
