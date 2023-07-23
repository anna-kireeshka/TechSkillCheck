import React, {FC, ReactNode} from 'react';
import styles from './Page.module.scss'
interface PageProps {
    children: ReactNode;
}
const Page: FC<PageProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Page;
