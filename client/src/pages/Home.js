import React
//{useState}
from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';

const Home = () => {

  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart/>
    </div>
  );
};

//   const [currentCategory, setCategory] = useState("");

//   return (
//     <div className="container">
//       <CategoryMenu setCategory={setCategory} />
//       <ProductList currentCategory={currentCategory} />
//     </div>
//   );
// };

export default Home;
