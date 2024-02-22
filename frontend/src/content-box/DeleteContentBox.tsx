import React from 'react';

import './ContentBox.css';

import {GymRecord} from '../entities/GymRecord';

interface ContentBoxProps {
    onSubmit: (id: number) => void;
    content: GymRecord;
}

const DeleteContentBox: React.FC<ContentBoxProps> = ({ onSubmit, content }) => {
    const [record, setRecord] = React.useState<GymRecord>(content);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    const handleSubmit = () => {
        onSubmit(record.id);
    };

    return (
        <div className="content-box">
            <p>Exercise: {record.exercise}</p>
            <p>Weight: {record.weight} kg</p>
            <p>When: {formatDate(record.date)}</p>
            <button onClick={handleSubmit}>Delete</button>
        </div>
    );
};

export default DeleteContentBox;
