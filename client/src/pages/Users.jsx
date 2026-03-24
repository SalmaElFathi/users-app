import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import axios from 'axios';
import { UserList } from "../components/UserList";
import { Header } from "../components/Header";

export function Users() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const url = search ? `/api/users?search=${search}` : '/api/users';
            const response = await axios.get(url);
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
    }, [search]);
    if (loading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error}</div>;
    const onDelete = async (id) => {
        try {
            if (window.confirm('Delete this user ?')) {
                await axios.delete(`/api/users/${id}`);
                fetchUsers();
            }

        } catch (error) {
            console.error('error deleting user');
            setError(error.message)
        }
    }
    return (
        <>
            <Header />
            <UserList users={users} onDelete={onDelete} />
        </>
    );
}