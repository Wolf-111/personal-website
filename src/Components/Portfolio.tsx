import React from 'react';
import sigma7 from '../images/sigma7.png';
import coinlink from '../images/coinlink.png';
import coinlinkLogo from '../images/coinlink-logo.png';
import sigma7Logo from '../images/sigma7-logo.png';

import '../App.css';

const Portfolio = () => {
    return (
        <div className='container-fluid portfolio'>
            <h1 className='portfolio-title'>Portfolio</h1>
            <div className='portfolio-content'>
                <div className='row sigma7-row'>
                    <div className='col-lg-6'>
                        <img className='sigma7-img' src={sigma7} />
                    </div>
                    <div className='col-lg-6'>
                        <h1 className='sigma7-title'>sigma7 <span><img style={{width: '20px'}} src={sigma7Logo} /></span></h1>
                        <p className='sigma7-text'>I was the cofounder of sigma7, a fintech startup that aimed to simplify stock research for retail investors. I was responsible for 100% of the frontend operations.</p>
                    </div>
                </div>
                <div className='row coinlink-row'>
                    <div className='col-lg-6'>
                        <h1 className='coinlink-title'><span style={{color: '#0B5AA0'}}>Coin</span><span style={{color: '#DDA04F'}}>Link</span> <span><img style={{width: '40px', marginBottom: '7px'}} src={coinlinkLogo} /></span></h1>
                        <p className='coinlink-text'>CoinLink was a tool that I decided to create when I was having trouble keeping track of my crypto wallets. It allows you to create 1 shareable URL to share your crypto wallets.</p>
                    </div>
                    <div className='col-lg-6'>
                        <img className='coinlink-img' src={coinlink} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
