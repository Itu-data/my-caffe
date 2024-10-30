import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
    return (
        <nav className="nav-links">
            <button onClick={() => setActiveTab('products')}>Product Management</button>
            <button onClick={() => setActiveTab('users')}>User Management</button>
        </nav>
    );
};

export default Navigation;
