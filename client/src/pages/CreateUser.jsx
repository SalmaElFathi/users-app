import { useState } from "react";
import axios from "axios";
import './CreateUser.css'
export function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error,setError]=useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (password === confirmPassword) {
                const response = await axios.post('/api/users/create', {
                    name,
                    email,
                    age,
                    password
                });
                console.log('User created:', response.data);
                setName('');
                setEmail('');
                setAge('');
                setPassword('');
                setConfirmPassword('');
            }
            else {
                setError('passwords did not match')
                console.error('passwords did not match');
            }
        } catch (error) {
            setError(error.message)
            console.error('Error creating user:', error.response || error.message);
        }
    };

    return (
        <>
        {error&&
        <span className="error">{error}</span>
        }
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button className="create-btn" type="submit">Create User</button>
        </form>
        </>
    );
}