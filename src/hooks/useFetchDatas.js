import { useEffect, useState } from "react"

const useFetchDatas = () => {
    
    const [dy, setPlans] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData/plans.json')
        .then(res => res.json())
        .then(data => setPlans(data))
    }, [])

    return {
        dy
    }
}

export default useFetchDatas;