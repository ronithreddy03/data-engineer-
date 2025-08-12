import React from 'react';

interface ProjectImageProps {
  title: string;
  width?: number;
  height?: number;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ title, width = 600, height = 400 }) => {
  const getProjectStyle = (title: string) => {
    switch (title.toLowerCase()) {
      case 'fraud detection microservices':
        return {
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          icon: '🛡️',
          accentColor: '#ff4757',
          text: 'Fraud Detection'
        };
      case 'time-series forecasting for wfm':
        return {
          background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #6c5ce7 100%)',
          icon: '📊',
          accentColor: '#00b894',
          text: 'WFM Forecasting'
        };
      case 'music analytics dashboard':
        return {
          background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 50%, #fd79a8 100%)',
          icon: '🎵',
          accentColor: '#fdcb6e',
          text: 'Music Analytics'
        };
      default:
        return {
          background: 'linear-gradient(135deg, #636e72 0%, #2d3436 100%)',
          icon: '💻',
          accentColor: '#00b894',
          text: 'Project'
        };
    }
  };

  const style = getProjectStyle(title);

  return (
    <div
      style={{
        width: width,
        height: height,
        background: style.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `radial-gradient(circle at 20% 80%, ${style.accentColor} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${style.accentColor} 0%, transparent 50%)`
        }}
      />
      
      {/* Main Icon */}
      <div
        style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
        }}
      >
        {style.icon}
      </div>
      
      {/* Project Title */}
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          marginBottom: '0.5rem'
        }}
      >
        {style.text}
      </div>
      
      {/* Subtitle */}
      <div
        style={{
          fontSize: '1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          textAlign: 'center',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
        }}
      >
        {title.includes('Fraud') ? 'Security & ML' : 
         title.includes('WFM') ? 'Time Series & Analytics' : 
         'Real-time Dashboard'}
      </div>
      
      {/* Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: style.accentColor,
          opacity: 0.6
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          background: style.accentColor,
          opacity: 0.4
        }}
      />
    </div>
  );
};

export default ProjectImage;
