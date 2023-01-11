import React, {MouseEventHandler, ReactNode} from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import {ButtonBase} from "@mui/material";

interface Props {
    children: ReactNode,
    to: string,
    onClick: MouseEventHandler
}

const NavLink = ({children, to, onClick}:Props) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <ButtonBase onClick={onClick} sx={{px: 2, py: 1, display: 'block', width: '100%', borderBottom: `${isActive ? '2px solid #CBC5EA' : 'transparent'}` }}>
            <Link to={to}>
                {children}
            </Link>
        </ButtonBase>
    );
};

export default NavLink;
