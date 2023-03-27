import { Outlet } from 'react-router-dom'

import './App.css'
import { Router } from './routes/Router'

export default () => {

  return (
    <div className="App">
      <Outlet />
      <Router />
    </div>
  )
}