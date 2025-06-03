import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index element={<h1>Homepage</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
