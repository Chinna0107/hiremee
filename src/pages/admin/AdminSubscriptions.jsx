import React from 'react';
import './Admin.css';

export default function AdminSubscriptions() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Subscriptions</h1>
        <p>Manage worker subscriptions, plans, and active memberships.</p>
      </div>
      
      <div className="admin-card">
        <div className="ac-empty">
          <p>No active subscriptions to display.</p>
          <button className="admin-btn-primary">Add New Plan</button>
        </div>
      </div>
    </div>
  );
}
