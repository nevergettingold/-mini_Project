import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
    return (
        <StyleHeader>
            <div className='header-top'>
                <div className='header-logo'>
                    <span><strong>D</strong>.jille</span>
                </div>
            </div>
            <div className='header-bottom'></div>
        </StyleHeader>
    );
};
const StyleHeader = styled.header`

`

export default Header;