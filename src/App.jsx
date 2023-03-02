import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import SearchInput from './components/SearchInput';

function App() {
  const [products, setProducts] = useState(productData);
  const [searchValue, setSearchValue] = useState("")


  const handleDelete = (id) => {
      const deleteProducts = [...products].filter(stuff => stuff._id !==id)
      setProducts(deleteProducts)

  }

  const handleSearch = (value) => {
      setSearchValue(value)
  }


  return (
    <>
      <h1>My shopping cart</h1>
      <SearchInput />

      <div className="cart">
        {/* ITERATION 1 */}

        <section>

        {products.map ((stuff) => {
          
          return  (
            <div>
              <h4>{stuff.name}</h4>
              <p>{stuff.price}</p>
              <p>{stuff._id}</p>
              <button handleDelete={handleDelete}>Delete Contact</button>

            </div>

          )
        }) }

        </section>

      </div>
    </>
  );
}

export default App;
