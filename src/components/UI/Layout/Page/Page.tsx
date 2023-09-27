import React, {FC, ReactNode} from 'react';
import './Page.scss'
interface PageProps {
    children: ReactNode;
}
const Page: FC<PageProps> = ({children}) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Page;
