import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import Hotels from "./Pages/hotels/Hotels"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hotels" element={<List/>} />
      <Route path="/hotels/:id" element={<Hotels/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
