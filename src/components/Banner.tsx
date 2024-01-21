import React from 'react';

const Banner : React.FC = () => {
    const backgroundImageUrl = "https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/64eb36ca8bbb584cfce01ea3_unlock-the-power-of-website-analytics-bg-image-techflow-x-webflow-template.jpg";
    return (
        <div className="container my-5 rounded-4 shadow" style={{backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat'}}>
            <div className="p-5 text-center">
            <h1 className="fw-bold text-body-emphasis">Ready to get started?</h1>
            <div className="d-inline-flex gap-2 mb-5 mt-3">
                <button className="d-inline-flex align-items-center btn btn-primary btn-md px-4 mx-3" type="button">
                Call to action
                </button>
                <button className="btn btn-outline-secondary btn-md px-4" type="button">
                Secondary link
                </button>
            </div>
            </div>
      </div>       
    );
};

export default Banner;