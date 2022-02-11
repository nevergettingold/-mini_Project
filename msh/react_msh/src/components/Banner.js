import React from 'react';
import styled from 'styled-components';

import bannerImg from '../images/banner.jpg' 

const Banner = (props) => {
    return (
        <StyleBanner>
            <img className='banner-img' src={bannerImg} alt='배너이미지'/>
            <div className='banner-card'>
                <span>분노가 끓어오르는 날</span>
                <span>그냥 참는 거지, 하고 싶은 말이 없는게 아니잖아요?</span>
            </div>
        </StyleBanner>
    );
};
const StyleBanner = styled.div`
    position: relative;
    height: 30rem;
    overflow: hidden;
    .banner-img{
        position: absolute;
        left: 0;
    }
    .banner-card{
        position: absolute;
        top: 50%;
        left: 22%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        span{
            text-align: left;
            color: #ffffff;
            &:first-child{
                font-size: 2.6rem;
                font-weight: bold;
            }
            &:last-child{
                padding-left: 4rem; 
            }
        }
        span+span{
            margin-top: 2rem; 
        }
    }
`

export default Banner;