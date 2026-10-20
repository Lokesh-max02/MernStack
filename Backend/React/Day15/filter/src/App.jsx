
import { useEffect, useState } from "react"

const App = () => {
  const [value, setValue] = useState([])
  const [datas, setDatas] = useState("")

  const data = async () => {
    let details = await fetch("https://dummyjson.com/products")
    let change = await details.json()
    setValue(change.products)
  }

  const handleChange = (e) => {
    setDatas(e.target.value)
  }

  // Search products by title
  let result = value.filter((e) =>
    e.title.toLowerCase().includes(datas.toLowerCase())
  )


  useEffect(() => {
    data()
  }, [])

  return (
    <>
      <div className="p-4">
        <input
          type="text"
          onChange={handleChange}
          value={datas}
          placeholder="Enter a product name"
          className="border border-gray-400 p-3 rounded-lg w-full"
        />
      </div>

      <div className="min-h-screen w-full bg-amber-100 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Product List
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {result.map((e) => (
            <div
              key={e.id}
              className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg border border-amber-200 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <h2 className="text-lg font-bold mb-3">
                <span className="text-amber-600">Title:</span> {e.title}
              </h2>

              <p className="text-xl font-semibold text-green-600">
                <span className="text-gray-600">Category:</span> {e.category}
              </p>

              <p className="text-xl font-semibold text-green-600">
                <span className="text-gray-600">Price:</span> ₹{e.price}
              </p>

              <button className="mt-5 w-full bg-amber-500 text-white font-semibold py-2 rounded-lg hover:bg-amber-600 transition duration-200">
                View Product
              </button>
            </div>
          ))}
        </div>

        {result.length === 0 && (
          <p className="text-center text-red-600 mt-6">
            No products found!
          </p>
        )}
      </div>
    </>
  )
}

export default App
