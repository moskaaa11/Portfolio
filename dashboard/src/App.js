import {useContext} from 'react';
import './style/dark.scss'
import "./App.scss";
import Home from "./pages/home/Home";
import ListUsers from  "./pages/list/ListUsers";
import ListProducts from  "./pages/list/ListProducts";
import ListOrders from  "./pages/list/ListOrders";
import ListDelivery from  "./pages/list/ListDelivery";
import Stats from "./pages/stats/Stats";
import Notes from "./pages/notes/Notes";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {DarkModeContex} from './context/darkModeContext'
 

function App() {

  const  {darkMode} = useContext (DarkModeContex)

  return (
    <div className={ darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
         <Route path="/">
          <Route index element={<Home/>} />
          <Route path="users">
            <Route index element={<ListUsers/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
          <Route path="products">
            <Route index element={<ListProducts/>}/>
          </Route>
          <Route path="orders">
            <Route index element={<ListOrders/>}/>
          </Route>
          <Route path="delivery">
            <Route index element={<ListDelivery/>}/>
          </Route>
          <Route path="stats">
            <Route index element={<Stats/>}/>
          </Route>
          <Route path="notes">
            <Route index element={<Notes/>}/>
          </Route>
         </Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
