import './Button.css';

function Button({ arrow, buttonStyle, loading, children, ...props }) {
  return (
    <button
      className={`mobile-menu ${buttonStyle} `}
      disabled={loading}
      {...props}
    >
      {loading ? 'Carregando...' : children}
      {arrow && <span className="arrow-icon">→</span>}
    </button>
  );
}

export default Button;
