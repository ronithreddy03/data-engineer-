'use client';

import React, { useEffect, useState } from 'react';

import { StatData } from '../../components/Stats/types';

const Age: React.FC = () => {
  const [age, setAge] = useState<string>('');

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    // Ronith's birth date: June 3, 2001 at 4:00 AM
    const birthTime = new Date('2001-06-03T04:00:00');
    setAge(((Date.now() - birthTime.getTime()) / divisor).toFixed(11));
  };

  useEffect(() => {
    tick(); // Initial tick
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
};

const data: StatData[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'experience',
    label: 'Years of experience',
    value: '3+',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Dallas, TX',
  },
  {
    key: 'data_processed',
    label: 'Data processed daily',
    value: '15TB+',
  },
  {
    key: 'fraud_reduction',
    label: 'Fraud detection improvement',
    value: '30%',
  },
];

export default data;
