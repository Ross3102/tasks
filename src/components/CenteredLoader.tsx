import Spinner from 'react-bootstrap/Spinner';
import styles from './CenteredLoader.module.css';

export default function CenteredLoader() {
  return (
    <Spinner className={styles.spinner} />
  )
}