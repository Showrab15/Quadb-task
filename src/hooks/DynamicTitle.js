import { useEffect } from "react"

const dynamicTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title}  || QuaDb`
    },[title])
}
export default dynamicTitle