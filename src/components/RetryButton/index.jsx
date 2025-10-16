import { IconReload } from '../Icons';
import styles from './retry-button.module.css';

export const RetryButton = ({ ...props }) => {

  
    return (
      <button {...props} className={styles.btn}>
        <IconReload /> Gerar nova resposta
      </button>
    );
  };
