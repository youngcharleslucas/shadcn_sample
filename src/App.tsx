import { Route, Routes } from "react-router"
import NWO from "./features/NWO/pages/NWO"
import Blah from "./features/Blah/pages/Blah"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Blah />} />
        <Route path="/nwo" element={<NWO />} />
      </Routes>
    </>
  )
}

export default App
