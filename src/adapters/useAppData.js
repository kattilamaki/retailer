import { useEffect, useState } from 'react'
import axios from 'axios'

const useAppData = () => {
  const [customers, setCustomers] = useState([])
  const [products, setProducts] = useState([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:3001/data`)
      .then(response => {
        setCustomers(response.data.customers)
        setProducts(response.data.products)
        setReady(true)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return { customers: customers, products: products, ready: ready }
}

export default useAppData
