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
            Перевести средства
        </a>
    );
};

DonateButton.defaultProps = {
    style: null,
    href: 'https://next.privat24.ua/payments',
    className: 'min-w-5/12 bg-orange-200 hover:bg-orange-300 text-red-600 font-bold py-1 px-3 rounded-xl'
};

