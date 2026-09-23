import React, { useState } from 'react';
import { jobs } from '../data/jobs';
import { HiLocationMarker, HiMap, HiClock, HiCurrencyRupee, HiBriefcase, HiSearch, HiPhone } from 'react-icons/hi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Jobs.css';

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useScrollReveal([searchQuery]);

  const filteredJobs = jobs.filter(job => {
    const lowerQuery = searchQuery.toLowerCase();
    return (
      job.title.toLowerCase().includes(lowerQuery) ||
      job.type.toLowerCase().includes(lowerQuery) ||
      job.location.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div className="jobs-page" ref={containerRef}>
      <div className="jobs-header reveal-fade-in">
        <div className="jh-content">
          <h1>Find Local Jobs</h1>
          <p>Browse {filteredJobs.length} active opportunities near you</p>
        </div>
        <div className="jh-search">
          <HiSearch className="jh-search-icon" />
          <input 
            type="text" 
            placeholder="Search by title, category, or location..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="jobs-grid">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card reveal-on-scroll">
            <div className="jc-header">
              <div>
                <span className={`urgency-badge ${job.urgency.toLowerCase()}`}>{job.urgency} Urgency</span>
                <h3>{job.title}</h3>
                <span className="jc-employer">{job.employer}</span>
              </div>
              <div className="jc-pay">
                <HiCurrencyRupee className="pay-icon" />
                <strong>{job.pay}</strong>
              </div>
            </div>

            <p className="jc-desc">{job.description}</p>

            <div className="jc-meta">
              <div className="jc-meta-item">
                <HiBriefcase className="jc-icon" />
                <span>{job.type}</span>
              </div>
              <div className="jc-meta-item">
                <HiLocationMarker className="jc-icon" />
                <span>{job.location}</span>
              </div>
              <div className="jc-meta-item">
                <HiMap className="jc-icon" />
                <span><strong>{job.distance} km</strong> away</span>
              </div>
              <div className="jc-meta-item">
                <HiClock className="jc-icon" />
                <span>{job.postedAt}</span>
              </div>
            </div>

            <div className="jc-footer">
              <a href={`tel:${job.phone}`} className="apply-btn">
                <HiPhone /> Apply Now (Call)
              </a>
            </div>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <div className="no-jobs">
            <p>No jobs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
