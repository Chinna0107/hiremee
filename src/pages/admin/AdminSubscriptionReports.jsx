import React from 'react';
import './Admin.css';

export default function AdminSubscriptionReports() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Subscription Reports</h1>
        <p>View analytics, revenue, and reports for all subscriptions.</p>
      </div>
      
      <div className="admin-card">
        <div className="ac-empty">
          <p>Insufficient data to generate reports at this time.</p>
        </div>
      </div>
    </div>
  );
}
