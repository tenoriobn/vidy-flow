import styles from './container.module.css'

export const Container = ({ children }) => {
    return <main className={styles.container}>{ children }</main>
}