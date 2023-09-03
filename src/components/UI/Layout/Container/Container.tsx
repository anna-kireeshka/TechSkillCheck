import React, {FC, ReactNode} from 'react';
import './Container.scss'
interface ContainerProps {
    children: ReactNode;
}
const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container;
