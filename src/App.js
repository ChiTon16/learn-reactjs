import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoFeature from './features/Todo/pages';
import AlbumFeauture from './features/Album/pages/index';
import NotFound from './components/NotFound';
import productApi from './API/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);
  return (

    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/todos">Todo</a>
          </li>
          <li>
            <a href="/albums">Album</a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeauture />} />

        {/* Đảm bảo Route của NotFound ở cuối cùng */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
