import React from 'react'
import { useState } from 'react'
const product = [{ id: 1, name: 'Noise-Canceling Headphones', category: 'Electronics', price: 299 },
  { id: 2, name: 'Smart Robot Vacuum', category: 'Electronics', price: 299 },
  { id: 3, name: 'Performance Running Shoes', category: 'Fitness', price: 120 },
  { id: 4, name: 'Minimalist Desk Lamp', category: 'Home', price: 45 },]
const tabs = ["All", "Electronics", "Fitness", "Home"]

const Filter = () => {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const filteredItems = product.filter((item) => {
        const  matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || item.category===category
        return matchesSearch&&matchesCategory
    })
return (
  <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
    {/* 1. Search Bar */}
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-4 pl-12 rounded-2xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="absolute left-4 top-4 opacity-30">🔍</span>
    </div>

    {/* 2. Category Chips */}
 <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
    {tabs.map((cat) => (
        <button
        key={cat}
        onClick={()=> setCategory(cat)}
        className={ `flex px-6 py-2 transition-all cursor-pointer ${
            category === cat ? "bg-amber-500 rounded-full text-white shadow-2xs" : "bg-white rounded-full  shadow-2xs text-gray-600 hover:bg-gray-100"
        }`}>
            {cat}
        </button>
    ))
    }
    </div>

    {/* 3. Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="h-40 bg-gray-100 rounded-2xl mb-4 flex items-center justify-center text-4xl">
            📦
          </div>
          <h3 className="font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-400 text-sm mb-2">{item.category}</p>
          <p className="text-amber-600 font-bold">${item.price}</p>
        </div>
      ))}
    </div>

    {/* 4. No Results Handle */}
    {filteredItems.length === 0 && (
      <div className="text-center py-20 text-gray-400">
        No products match your search.
      </div>
    )}
  </div>
);
}

export default Filter