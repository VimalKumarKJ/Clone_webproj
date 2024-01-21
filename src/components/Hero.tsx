import React from 'react';

const Hero: React.FC = () => {
    const backgroundImageUrl = "https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/64eb36ca8bbb584cfce01ea3_unlock-the-power-of-website-analytics-bg-image-techflow-x-webflow-template.jpg";
    return (
        <div className="px-4 pt-5 my-5 text-center" style={{backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <h1 className="display-2 fw-bold text-body-emphasis text-dark mb-3">We finally fixed event<br />marketing!</h1>
            <div className="col-lg-4 mx-auto">
                <p className="lead mb-4 text-dark fs-5 font-weight-bold">EventOps and intelligence platform purpose-built to support modern event marketing teams. Plan and analyze events with intelligence to derive better ROI from your event marketing engine.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Join Waitlist</button>
                </div>
            </div>
            <div className="overflow-hidden" >
                <div className="container px-5">
                     <img src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/656cf0184c3117db5e0f4cd1_Screenshot%2004-12-2023%20at%2002.43.png" alt="" className="img-fluid solo" style={{ maxWidth: '752px' }}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;

