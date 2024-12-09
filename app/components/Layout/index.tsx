import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import { Box } from '@chakra-ui/react';


interface LayouProps {
    children: ReactNode | ReactNode[]
}
const Layout = ({children}: LayouProps) => {
    return(
        <>
            <Navbar />
            <Box>
                {children}
            </Box>
        </>
    )
}

export default Layout;
