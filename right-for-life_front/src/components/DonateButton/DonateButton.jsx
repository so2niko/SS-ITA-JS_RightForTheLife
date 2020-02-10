import React from 'react';

export const DonateButton = ({ href, className, style }) => {
    return (
        <a
            className={className}
            rel='noopener noreferrer'
            target="_blank"
            href={href}
            style={style}
        >
            Помочь
        </a>
    );
};

DonateButton.defaultProps = {
    style: null,
    href: 'https://next.privat24.ua/payments',
    className: 'min-w-5/12 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1 px-3 rounded-xl'
};

