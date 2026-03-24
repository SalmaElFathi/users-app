import {Routes,Route} from 'react-router'
import {Users} from './pages/users';
import { CreateUser } from './pages/CreateUser';
import { EditUser } from './pages/EditUser';
function App() {
  return (
    <Routes>
        <Route index element={<Users/>}/>
        <Route path="/create" element={<CreateUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
    </Routes>
  )
}
export default App;