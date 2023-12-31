import axios from "axios"

const url : string = "https://challengetodo-z896.onrender.com/"

export const createNewTask = async (data : any) => {
    try {
        return await axios.post(`${url}/create-task` , data).then((res : any) => {
            // console.log(res.data)
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const viewTask = async () => {
    try {
        return await axios.get(`${url}/get-task`).then((res : any) => {
         return res.data.data
        })
    } catch (error) {
        return(error);
    }
}

export const deleteTask = async (taskID: string) => {
    try {
        return await axios.delete(`${url}/${taskID}/delete-task`).then((res : any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}