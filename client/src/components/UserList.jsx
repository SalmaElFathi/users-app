import { Link } from 'react-router';
import './UserList.css';

export function UserList({ users ,onDelete}) {
    if (users.length === 0) {
        return <div className="no-users">No users found</div>;
    }
    return (
        <table className='user-table'>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.status}</td>
                        <td className="action">
                            <Link to={`/edit/${user._id}`} ><i className="fas fa-pen" ></i></Link>
                            <button onClick={()=>onDelete(user._id)}><i className="fas fa-trash" ></i></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}