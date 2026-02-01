import React from 'react';

interface CardProps {
    title: string;
    content: string;
    footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, footer }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{title}</h2>
            </div>
            <div className="card-body">
                <p>{content}</p>
            </div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};

export default Card;