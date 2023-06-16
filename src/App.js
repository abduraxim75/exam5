import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin.panel.js/admin";
import Blog from "./pages/blog/blog";
import MyCarousel from "./pages/carousel/carousel";
import Error from "./pages/error/error";
import Home from "./pages/home/home";
import Main from "./pages/main/main";
import Layout from "./pages/navbar/layout";
import Pages from "./pages/pages/pages";
import Shop from "./pages/shop/shop";
import './style/global.scss'

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/pages" element={<Pages />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Layout>
            <MyCarousel/>
            <Main/>
        </div>
    );
}

export default App;
