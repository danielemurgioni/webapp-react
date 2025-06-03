import DefaultLayout from "./layouts/DefaultLayout"
//pages
import Homepage from "./pages/Homepage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={Homepage} />
            <Route path="/movies/:id" element={<h1>Movie Detail</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
