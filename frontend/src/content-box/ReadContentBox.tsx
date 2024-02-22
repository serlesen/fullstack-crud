import React from 'react';

import './ContentBox.css';

import {GymRecord} from '../entities/GymRecord';

interface ContentBoxProps {
    content: GymRecord;
}

const ReadContentBox: React.FC<ContentBoxProps> = ({ content }) => {
    const [record, setRecord] = React.useState<GymRecord>(content);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    return (
        <div className="content-box">
            <p>Exercise: {record.exercise}</p>
            <p>Weight: {record.weight} kg</p>
            <p>When: {formatDate(record.date)}</p>
        </div>
    );
};

export default ReadContentBox;
