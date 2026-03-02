import React from 'react';
import styles from './styles.module.css';

const ScrollStack = ({ children }) => {
    return (
        <div className={styles.scroll_stack_scroller}>
            <div className={styles.scroll_stack_inner}>
                {React.Children.map(children, (child, index) => (
                    <div className={styles.scroll_stack_card_wrapper} key={index}>
                        <div className={styles.scroll_stack_card} style={{ top: `${index * 10}px` }}>
                            {child}
                        </div>
                    </div>
                ))}
                <div className={styles.scroll_stack_end}></div>
            </div>
        </div>
    );
};

export const ScrollStackItem = ({ children }) => {
    return <>{children}</>;
};

export default ScrollStack;
