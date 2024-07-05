import Content from "./component/Content/Content";
import Header from "./component/Header/Header";
import LoginPage from "./component/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./component/News";
import NewsPage from "./component/NewsPage";
import Missing from "./component/Missing";

function App() {
  const news = [
    { id: 1, text: "Как успевать больше" },
    { id: 2, text: "Методы для продуктивности" },
    { id: 3, text: "Основы маркетинга" },
  ];
  return (
    <Router>
      <div className="App">
        <Header title="My list" />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news" element={<News news={news} />} />
          <Route path="/newsPage:id" element={<NewsPage news={news} />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
