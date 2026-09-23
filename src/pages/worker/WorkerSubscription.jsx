import React from 'react';
import './Worker.css';

export default function WorkerSubscription() {
  return (
    <div className="worker-page">
      <div className="worker-header">
        <div className="wh-left">
          <div>
            <h1>Subscription Plan</h1>
            <p>View your active subscription and upgrade to get more leads.</p>
          </div>
        </div>
      </div>
      
      <div className="admin-section" style={{ marginTop: 24 }}>
        <div className="ac-empty">
          <p>You are currently on the free basic tier.</p>
          <button className="admin-btn-primary">View Premium Plans</button>
        </div>
      </div>
    </div>
  );
}
