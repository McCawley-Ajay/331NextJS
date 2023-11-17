import React, { useState, useEffect } from 'react'

const Search = ({ items, setFilteredItems }) => {
  const handleSearch = (a) => {
    const search = a.target.value
    const filter = items.filter(item => item.title.includes(search))
    setFilteredItems(filter)
  }

  return (
    <input type = "text" onChange={handleSearch}/>
  )
}

const Table = ({ items }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>
              <img src={item.image} alt={item.title} style={{ width: '50px' }} />
            </td>
            <td>${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

 export default function Main(){
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setItems(data)
        setFilteredItems(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchItems()
  }, [])

  return (
    <div>
      <Search items={items} setFilteredItems={setFilteredItems} />
      <Table items ={filteredItems} />
    </div>
  )
}


