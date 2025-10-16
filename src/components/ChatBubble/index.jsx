'use client'

import Button from '../Button';
import { IconClose } from '../Icons';
import styles from './chatBubble.module.css';
import ReactMarkdown from 'react-markdown';

export default function ChatBubble({ message, onRemove, isUser = false }  ) {
  return (
    <div className={`${styles.bubbleWrapper} ${isUser ? styles.user : styles.bot}`}>
      <div className={styles.bubble}>
        <ReactMarkdown>{message}</ReactMarkdown>
        <div>
          <Button variant={isUser ? 'secondary' : 'primary'} onClick={onRemove} >
            Remover <IconClose fill={isUser ? '#C5C5C5' : '#222222'} />
          </Button>
        </div>
      </div>
    </div>
  );
}