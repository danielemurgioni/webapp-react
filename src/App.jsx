import DefaultLayout from "./layouts/DefaultLayout"
//pages
import Homepage from "./pages/Homepage"
import Moviepage from "./pages/Moviepage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={Homepage} />
            <Route path="/movies/:id" Component={Moviepage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
