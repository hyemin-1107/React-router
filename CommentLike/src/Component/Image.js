import React from 'react';
import image from '../Component/img/img.jpeg'
import styled from 'styled-components';

const MainImage = () => {

    return (
        <>  
            <Image src={image} alt='image' />
        </>
    );
};

const Image = styled.img`
    display: block;

    width: 600px;
    height: 500px;
`;

export default MainImage ;