import { Routes, Route } from "react-router-dom";
import { BookDetail } from "../Detail/BookDetail.jsx";
import { BookList } from "../BookList/BookList.jsx";
import { Home } from "../Home/Home.jsx";

export const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/list" element={<BookList />} />
        <Route exact path="/detail/:titulo" element={<BookDetail />} />
      </Routes>
    </div>
  );
};
