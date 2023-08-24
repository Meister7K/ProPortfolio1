import Layout from "./components/layout/Layout";
import "./App.scss";
import { useState, useEffect, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/pages/error/Error";

import Loader from "./components/loader/Loader";

const GameCanvas = lazy(
  () => import("./components/game_setup/canvas/GameCanvas")
);

function App() {
 


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
             
              <Route path="game-canvas" element={<GameCanvas />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
