import styles from './button.module.css';

const Button = ({ variant = 'primary', children, ...props }) => {
    const variantClass = {
      primary: styles.primary,
      secondary: styles.secondary,
      danger: styles.danger,
    };
  
    const className = `${styles.button} ${variantClass[variant] || styles.primary}`;
  
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  };

export default Button;