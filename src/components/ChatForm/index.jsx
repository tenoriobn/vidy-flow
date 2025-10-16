'use client'

import styles from './chat.module.css'
import { IconSend } from "../Icons"

export const ChatForm = ({ input, handleInputChange, handleSubmit }) => {
    return (<form className={styles.form} onSubmit={handleSubmit}>
        <input 
            className={styles.input} 
            placeholder="Digite sua mensagem..."
            required
            onChange={handleInputChange}
            value={input}
        />
        <button  className={styles.btn}>
            <IconSend />
        </button>
    </form>)
}