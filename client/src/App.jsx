import {Routes,Route} from 'react-router'
import {Users} from './pages/users';
function App() {

  return (
    <Routes>
        <Route index element={<Users/>}/>
    </Routes>
  )
}

export default App
