import React, {FC, ReactNode} from 'react';
import styles from './Page.module.scss'
interface PageProps {
    children: ReactNode;
}
const Page: FC<PageProps> = ({ children }) => {
    return (
        <section className={styles.wrapper}>
            {children}
        </section>
    )
}

export default Page;
