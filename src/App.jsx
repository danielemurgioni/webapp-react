import DefaultLayout from "./layouts/DefaultLayout"
//pages
import Homepage from "./pages/Homepage"
import Moviepage from "./pages/Moviepage"
import NotFoundpage from "./pages/NotFoundpage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={Homepage} />
            <Route path="/movies/:id" Component={Moviepage} />
            <Route path="*" Component={NotFoundpage} />  {/* l'asterisco cattura tutte le rotte non definite, deve stare per ultima */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
