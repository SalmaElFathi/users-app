import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'; 
import { useState } from 'react';
import './Header.css';

export function Header() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams(); 
    const [search, setSearch] = useState(searchParams.get('search') || '');
    
    const handleOnChange = (event) => {
        setSearch(event.target.value);
    };
    
    const handleSearch = () => {
        if (search.trim()) {
            navigate(`/?search=${encodeURIComponent(search)}`); 
        }
    };
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    
    return (
        <div className="container">
            <h2>Users Management</h2>
            <ul className="inner-container">
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/contact">contact</NavLink></li>
            </ul>
            <div className="search">
                <input 
                    value={search}  
                    placeholder='Search users...' 
                    onChange={handleOnChange}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSearch}>
                   <i className='fas fa-search'> </i>
                </button>
            </div>
            <button onClick={() => navigate("/create")}>
                <i className="fas fa-user-plus"></i>
            </button>
        </div>
    );
}