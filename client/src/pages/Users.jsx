import { useState, useEffect } from "react";
import axios from 'axios';
import { UserList } from "../components/UserList";
import { Header } from "../components/Header";

export function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            console.log('response ' + response.data.users);
            if (response.data.success) {
                setUsers(response.data.users);
                setError(null);
            }
            else {
                console.error('Unexpected response structure:', response.data);
                setUsers([]);
                setError('Invalid data format');
            }
        } catch (error) {
            setError(error.message || "An error occurred");
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <Header />
            <UserList users={users} />
        </>
    );
}