import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, to, onClick, className = '', type = 'button' }: ButtonProps) => {
    const baseClass = `btn-primary ${className}`;

    if (to) {
        const isExternal = to.startsWith('http');

        if (isExternal) {
            return (
                <a href={to} className={baseClass} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }

        return (
            <Link to={to} className={baseClass}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={baseClass}>
            {children}
        </button>
    );
};

export default Button;
