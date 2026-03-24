import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export function EditUser() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('ACTIVE');
  const [error, setError] = useState(null);

 useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`);
      
      const user = res.data.user; 

      setName(user.name || '');
      setEmail(user.email || '');
      setAge(user.age || '');
      setStatus(user.status || 'ACTIVE');

    } catch (err) {
      setError(err.message);
    }
  };
  fetchUser();
}, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, {
        name,
        email,
        age,
        status
      });
      navigate('/'); 
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    }
  };

  return (
    <>
      {error && <span className="error">{error}</span>}
      <form onSubmit={handleUpdate}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="number" value={age} onChange={e => setAge(e.target.value)} required />
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="active">ACTIVE</option>
          <option value="blocked">BLOCKED</option>
        </select>
        <button className="update-btn" type="submit">Update User</button>
      </form>
    </>
  );
}