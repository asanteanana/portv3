'use client';

import { useState, useEffect } from 'react';

export default function TimeDisplay() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            setTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-between items-center text-neutral-600 dark:text-neutral-400 text-sm mt-8">
            <div>© 2025 Nana Asante</div>
            <div>{time}</div>
        </div>
    );
} 