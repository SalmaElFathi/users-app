import {Routes,Route} from 'react-router'
import {Users} from './pages/users';
import { CreateUser } from './pages/CreateUser';
function App() {

  return (
    <Routes>
        <Route index element={<Users/>}/>
        <Route path="/create" element={<CreateUser/>}/>
    </Routes>
  )
}

export default App
