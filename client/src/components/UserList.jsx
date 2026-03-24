import './UserList.css';

export function UserList({users}) {
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
                        <td class="action">
                            <i class="fas fa-pen" ></i>
                            <i class="fas fa-trash" ></i>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}