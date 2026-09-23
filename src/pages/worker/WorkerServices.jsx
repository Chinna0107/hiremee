import React, { useState } from 'react';
import { HiBriefcase, HiCurrencyRupee, HiLocationMarker } from 'react-icons/hi';
import './Worker.css';
import '../admin/Admin.css'; // For admin-card and ac-empty

export default function WorkerServices() {
  const [isAdding, setIsAdding] = useState(false);
  
  return (
    <div className="worker-page">
      <div className="worker-header">
        <div className="wh-left">
          <div>
            <h1>My Services</h1>
            <p>Manage the services you offer and configure your availability.</p>
          </div>
        </div>
      </div>
      
      <div className="admin-section" style={{ marginTop: 24 }}>
        {!isAdding ? (
          <div className="admin-card ac-empty">
            <p>You haven't added any specific service details yet.</p>
            <button className="admin-btn-primary" onClick={() => setIsAdding(true)}>Add a Service</button>
          </div>
        ) : (
          <div className="admin-card">
            <h2 style={{ marginBottom: 24, fontSize: 20 }}>Add New Service</h2>
            <form className="premium-form" onSubmit={e => { e.preventDefault(); setIsAdding(false); }}>
              <div className="form-group">
                <label>Service Name / Title</label>
                <div style={{ position: 'relative' }}>
                  <HiBriefcase style={{ position: 'absolute', top: 16, left: 16, color: '#94a3b8' }} />
                  <input type="text" className="form-input" placeholder="e.g. Expert Plumbing, House Cleaning" style={{ paddingLeft: 44, width: '100%', boxSizing: 'border-box' }} required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Hourly Rate (₹)</label>
                  <div style={{ position: 'relative' }}>
                    <HiCurrencyRupee style={{ position: 'absolute', top: 16, left: 16, color: '#94a3b8' }} />
                    <input type="number" className="form-input" placeholder="e.g. 500" style={{ paddingLeft: 44, width: '100%', boxSizing: 'border-box' }} required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Service Location</label>
                  <div style={{ position: 'relative' }}>
                    <HiLocationMarker style={{ position: 'absolute', top: 16, left: 16, color: '#94a3b8' }} />
                    <input type="text" className="form-input" placeholder="e.g. Hyderabad" style={{ paddingLeft: 44, width: '100%', boxSizing: 'border-box' }} required />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                <button type="button" className="admin-btn-primary" style={{ background: '#f1f5f9', color: '#475569', flex: 1 }} onClick={() => setIsAdding(false)}>Cancel</button>
                <button type="submit" className="submit-btn" style={{ margin: 0, flex: 2 }}>Save Service</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
