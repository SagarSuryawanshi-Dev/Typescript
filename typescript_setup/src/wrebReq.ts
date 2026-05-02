import axios,{type AxiosResponse,isAxiosError} from "axios"

interface Todo {
    userId:number
    id:number
    title:string
    completed:boolean
}

// axios.get("https://api.wreb.dev/v1/agents")
// .then(response => {
//     console.log(response.data)
// })

const fetchTodo = async () => {
    try {
        const response:AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response.data)
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message)
        }
    }
}




// fetch

const fetchTo = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
       if(!response.ok){
         throw new Error(`HTTP error ${response.status}`)
       }
       const data:Todo = await response.json()
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message)
        }
    }
}


// npm i -D @types/some laibrary