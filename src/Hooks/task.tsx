import { useQuery } from "@tanstack/react-query"
import { viewTask } from "../Apis/taskApi"

export const useGetAllTasks =  () => {
    const { data : allTasks , isLoading} = useQuery({
        queryKey : ["allUser"],
        queryFn : viewTask
    });

    return { allTasks , isLoading}
}