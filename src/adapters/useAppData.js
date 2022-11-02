import { useEffect, useState } from 'react'
import axios from 'axios'

const useAppData = () => {
  const [customers, setCustomers] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3001/customers`)
      .then(response => {
        setCustomers(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    axios
      .get(`http://localhost:3001/products`)
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return { customers: customers, products: products, ready: true }
}

export default useAppData
