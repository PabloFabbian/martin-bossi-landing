const DiagonalSeparator = ({ className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        className={className}
        preserveAspectRatio="none"
    >
        <rect width="1000" height="100" fill="#001d3d" />

        <g fill="url(#grad)">
            <path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".6"></path>
            <path d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z" opacity=".6"></path>
            <path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".6"></path>
            <path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path>
        </g>

        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00000a" />
                <stop offset="50%" stopColor="#012141" />
                <stop offset="100%" stopColor="#050f24" />
            </linearGradient>
        </defs>
    </svg>
);

export default DiagonalSeparator;