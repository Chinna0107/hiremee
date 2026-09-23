import React from 'react';
import './Admin.css';

export default function AdminJobs() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Jobs Posting</h1>
        <p>Manage and review all job postings across the platform.</p>
      </div>
      
      <div className="admin-card">
        <div className="ac-empty">
          <p>No job postings available yet.</p>
          <button className="admin-btn-primary">Create Job Posting</button>
        </div>
      </div>
    </div>
  );
}
