'use client';

import React from 'react';

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your PDF resume
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#000000',
        color: '#ffffff',
        border: '2px solid #000000',
        borderRadius: '8px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease',
        zIndex: 1000,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#333333';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#000000';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
    >
      📄 Download Resume
    </button>
  );
};

export default DownloadButton;
