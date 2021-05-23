import axios from 'axios'
import { useEffect,useState } from 'react'

export default function useSearch(textTyped,pageNumber) {

    const [loading,setLoading] = useState(true)
    const [ error , setError] = useState(false)
    const [ invoice, setInvoice] = useState([])
    const [ hasMore , setHasMore] = useState(false)

    useEffect(() => {

        setError(false)
        setLoading(true)
        
        let cancel

        axios({
            method:'Get',
            url:"http://localhost:8080/1828259/finalCall?",
            params:{ text:textTyped,page:pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res=>{

            setInvoice((prevInvoice)=>{
                return [...new Set([...prevInvoice, res ])]
                
            })
            setHasMore(res.lenght>0)
            setLoading(false)
            console.log(res.data)
        }).catch(e=>{
            if (axios.isCancel(e)) return
            setError(true)
        })


    }, [textTyped,pageNumber])

    return { loading,hasMore,invoice,error }
}
