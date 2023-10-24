import React, {FC, ReactNode} from 'react';
import './ContainerCenter.scss'

interface ContainerProps {
    children: ReactNode;
}

const ContainerCenter: FC<ContainerProps> = ({children}) => {
    return (
        <div className="container-center">
            {children}
        </div>
    )
}

export default ContainerCenter;