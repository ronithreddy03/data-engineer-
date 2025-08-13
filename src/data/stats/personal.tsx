'use client';

import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';

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

const DaysSinceTrip: React.FC = () => {
  const [days, setDays] = useState<number>(0);

  const updateDays = () => {
    const lastTrip = dayjs('2025-07-03');
    const today = dayjs();
    setDays(today.diff(lastTrip, 'day'));
  };

  useEffect(() => {
    updateDays(); // Initial calculation
    const timer = setInterval(updateDays, 1000 * 60 * 60); // Update every hour
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{days} days (and counting!)</>;
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
    value: 'Santa Clara, CA',
  },
  {
    key: 'data_processed',
    label: 'Data processed daily',
    value: '15TB+ (enough to store every cat meme ever made… probably 🐱)',
  },
  {
    key: 'fraud_reduction',
    label: 'Fraud detection improvement',
    value: '30% (scammers now hate me 😎)',
  },
  {
    key: 'ml_models',
    label: 'Machine learning models trained',
    value: 'Countless — and they still ask for more data',
  },
  {
    key: 'dashboards',
    label: 'Dashboards built',
    value: 'Enough to make stakeholders actually smile at meetings',
  },
  {
    key: 'days_since_trip',
    label: 'Days since my last trip',
    value: <DaysSinceTrip />,
  },
];

export default data;
