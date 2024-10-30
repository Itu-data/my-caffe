import React, { useState } from 'react';
import Navigation from './Navigation';
import ProductManagement from './ProductManagement';
import UserManagement from './UserManagement';

const Dashboard = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState('products');

    const renderContent = () => {
        switch (activeTab) {
            case 'users':
                return <UserManagement />;
            case 'products':
            default:
                return <ProductManagement />;
        }
    };

    return (
        <div className="dashboard-container">
            <header>
                <button onClick={onLogout} id="logout">Logout</button>
            </header>
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
        </div>
    );
};

export default Dashboard;
