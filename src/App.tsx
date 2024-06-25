import { Routes, Route } from "react-router-dom"
import ContactForm from "./_auth/forms/ContactForm"
import Home from './_root/pages/Home'
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          { /** Public routes */}
          <Route path='/contacto' element={<ContactForm />} />
          {/** Private routes */}
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App