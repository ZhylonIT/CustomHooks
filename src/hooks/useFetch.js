import { useState } from "react"


export const useFetch = () => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const url = 'https://jsonplaceholder.typicode.com/users'
    const { data, isLoading, error } = state


    const fetchData = async (url, method, bodyData = null) => {
        if (!url) return
        try {
            const options = {
                method: method || 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
            }
            const response = await fetch(url, options)
            const data = await response.json()
            setstate({
                data: data,
                isLoading: false,
                error: null
            })
        }
        catch (error) {
            setstate({
                data: null,
                error: 'Error al cargar la información',
                isLoading: false
            })
        }
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error,
        fetchData
    }
}
