import { Outlet } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx'
import SearchForm from './components/SearchForm.jsx'

function App() {

  return (
    
<div>
    <Navbar></Navbar>
    <SearchForm/>
    <Outlet></Outlet>
    <p>Footer</p>


</div>
    
  )
}
//outlet é o elemento do meio da página que está sempre mudando, mas mantem a estrutura base das páginas
export default App
