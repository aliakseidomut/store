import { useState } from "react";
import classes from "../styles/App.module.css"
import Sorts from "./Sorts";
import { products } from "../products"
import Product from "./Product";
import Filters from "./Filters";

function App() {
  const [sort, setSort] = useState('popular');
  const [filters, setFilters] = useState([]);

  const handleSetSort = (sort) => {
    setSort(sort);
  }

  const handleSetFilters = (filter) => {
    setFilters(filter);
  }

  const changeProductsList = () => { 
    let newProducts = [...products];

    newProducts = newProducts.sort((a, b) => {
      return sort === 'popular' ? 
      b.rating - a.rating :
      sort === 'cheap' ?
      a.price - b.price :
      sort === 'expensive' ?
      b.price - a.price : '';
    });
    
    return newProducts[0] ? newProducts : [...products];
  }

  return (
    <div className={classes.app}>
      <header>
        <Sorts sort={sort} onSetSort={handleSetSort} />
        <input type="text" placeholder="Поиск" />
      </header>

      <main>
        <Filters filters={filters} onSetFilters={handleSetFilters} />
        <div className={classes.products}>
          {changeProductsList().map(el => <Product product={el} />)}
        </div>
      </main>
    </div>
  );
}

export default App;
