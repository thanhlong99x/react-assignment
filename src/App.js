import { useState, useEffect } from "react";
import { add, edit, getAll, remove } from "./api/productAPI";
import {addC, editC,getAllC, removeC } from "./api/categoryAPI"
import Routes from "./routes";

function App() {
  //chay sau khi return
  useEffect(() => {
    //lay products
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
    //lay categories
    const getCategories = async () => {
      try {
        const { data } = await getAllC();
        setCategories(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getCategories();
  }, []);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // xoa san pham
  const onRemoveHandler = async (id) => {
    const { data } = await remove(id);
    const newProducts = products.filter((item) => item.id !== data.id);
    setProducts(newProducts);
  };
  // them san pham
  const onAddHandler = async (item) => {
    const { data } = await add(item);
    setProducts([...products, data]);
  };
// cap nhat san pham
  const onEditHandler =async (item) => {
    try {
      const {data} = await edit(item);
      const newProducts = products.map((product) =>
        product.id === item.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }
  };


  // them loai
  const onAddHandlerC = async (item) => {
    const { data } = await addC(item);
    setCategories([...categories, data])
  };
// cap nhat loại
  const onEditHandlerC =async (item) => {
    try {
      const {data} = await editC(item);
      const newCategory = categories.map((category) =>
      category.id === item.id ? data : category
      );
      setProducts(newCategory);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <Routes
      categories={categories}
      products={products}
      onRemove={onRemoveHandler}
      onAdd={onAddHandler}
      onEdit={onEditHandler}
      onAddC={onAddHandlerC}
      onEditC={onEditHandlerC}
    ></Routes>
  );
}

export default App;
