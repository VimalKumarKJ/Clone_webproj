import React from "react";

const FeatureSpecs:  React.FC = () => {
    return (
        <div className="container px-4 py-2 border-bottom" id="featured-3">
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="mb-4">
                        <img
                            src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/655e1d51945411b82bb0cce1_goal.png"
                            alt= ""
                            className="img-fluid mb-4 w-100"
                        />
                    </div>
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-1">
                        <img
                            src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/650aa0fa73916c7da7b8a02e_fi_life-buoy%20(1).svg"
                            alt="EventOps"
                            className="img-fluid mb-4 w-100"
                        />
                    </div>
                    <h3 className="fs-5 text-body-emphasis">EventOps</h3>
                    <p>
                        Take control of your EventOps by unifying 
                        event approval workflows, budgeting & 
                        scenario modeling, Goals & ROI trackers, and 
                        forecasting into one single tool.
                    </p>
                </div>
                <div className="feature col">
                    <div className="mb-4">
                        <img
                            src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/655e1db29120a56d6ba76b10_Audience1.png"
                            alt= ""
                            className="img-fluid mb-4 w-100"
                        />
                    </div>
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-1">
                        <img
                            src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/650aa185078f1b7bb4911902_fi_bar-chart-2.svg"
                            alt="Intelligence"
                            className="img-fluid mb-4"
                        />
                    </div>
                    <h3 className="fs-5 text-body-emphasis">Intelligence</h3>
                    <p>
                        With EventHQ being the universal source of truth 
                        for your events data, we help you derive 
                        intelligence on your audience, revenue, and 
                        events to help you make data-driven decisions.
                    </p>
                </div>
                <div className="feature col">
                    <div className="mb-4">
                        <img
                            src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/656ce6b447e4444dd91f4b75_Integration1.png"
                            alt= ""
                            className="img-fluid mb-4 w-100"
                        />
                    </div>
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-1">
                        <img
                            src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/650aa1a73a70c34465a01969_fi_git-pull-request.svg"
                            alt="Automation"
                            className="img-fluid mb-4 w-100"
                        />
                    </div>
                    <h3 className="fs-5 text-body-emphasis">Automation</h3>
                    <p>
                        Automate speaker, sponsor & vendor 
                        management, emails, digital signage, and QR 
                        code ticket printing to save time for event
                         marketers who can focus on the bigger picture.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureSpecs;