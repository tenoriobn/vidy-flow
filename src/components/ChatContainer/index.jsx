'use client'

import Button from '../Button';
import ChatBubble from '../ChatBubble';
import { ChatForm } from '../ChatForm';
import { ChatHeader } from '../ChatHeader';
import { IconStop } from '../Icons';
import { Loader } from '../Loader';
import { RetryButton } from '../RetryButton';
import styles from './container.module.css';

import { useChat } from 'ai/react'

export const ChatContainer = () => {

    const { 
        messages, 
        input, 
        handleInputChange, 
        handleSubmit,
        isLoading,
        stop
    } = useChat()

    return (
        <section className={styles.container}>
            <ChatHeader />
            <div className={styles.chat}>
                
                {messages.map((msg) => (
                    <ChatBubble
                        key={msg.id}
                        message={msg.content}
                        isUser={msg.role == 'user'} 
                        onRemove={() => console.log('remove message', msg.id)}
                    />
                ))}

            </div>
            {isLoading && <div>
                <Loader />
                <Button variant='danger' onClick={stop} >
                    <IconStop /> parar
                </Button>
            </div>}
            <ChatForm 
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
        </section>
    );
};