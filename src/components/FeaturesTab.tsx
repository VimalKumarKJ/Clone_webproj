import React from "react";

const FeatureTabs:  React.FC = () => {
    return (
        <div className="container px-4 py-5" id="icon-grid">
        <h1 className="pb-3 text-center">Power up your events <br/> marketing</h1>
  
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-5">
          <div className="col d-flex align-items-start border border-top-0 border-bottom-0">
            <img
                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/650aa1c03a70c34465a0235d_fi_git-branch.svg"
                alt = "Link icon"
                className="m-3"
            />
            <div>
              <h3 className="fw-bold mb-0 fs-6 text-body-emphasis mb-2">Event Approval Workflow</h3>
              <p>No more missed emails with work and excel attachments. Streamline your event workflow process.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start border border-top-0 border-bottom-0">
            <img
                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/650aa1e775e4cebd31cb5c1e_ChartPieSlice.svg"
                alt = "Pie chart icon"
                className="m-3"
            />
            <div>
              <h3 className="fw-bold mb-0 fs-6 text-body-emphasis mb-2">Budgeting & Scenarios</h3>
              <p>Take a data-backed approach toward your <br/> event strategy powered by our intelligence.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start border border-top-0 border-bottom-0">
            <img
                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/650aa2029b291fa47ccbfcd6_ProjectorScreenChart.svg"
                alt = "Projector-Screen icon"
                className="m-3"
            />
            <div>
              <h3 className="fw-bold mb-0 fs-6 text-body-emphasis mb-2">Goals and ROI tracker</h3>
              <p>Set goal and track every <br/> engagements and the outcomes of <br/> each event.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start border border-top-0 border-bottom-0">
            <img
                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/650aa185078f1b7bb4911902_fi_bar-chart-2.svg"
                alt = "Bar graph icon"
                className="m-3"
            />
            <div>
              <h3 className="fw-bold mb-0 fs-6 text-body-emphasis mb-2">Intelligence</h3>
              <p>Numbers are just numbers until you <br/>know what to look at. EventHQ turns <br/>your event data into insights.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start border border-top-0 border-bottom-0">
            <img
                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/650aa22b0e1caaa18850f929_PresentationChart.svg"
                alt = "Presentation chart icon"
                className="m-3"
            />
            <div>
              <h3 className="fw-bold mb-0 fs-6 text-body-emphasis mb-2">Outcome Forecasting</h3>
              <p>Forecast your event outcomes with <br/>historical data of events and their <br/>goals and ROI.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start border border-top-0 border-bottom-0">
            <img
                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/650aa1a73a70c34465a01969_fi_git-pull-request.svg"
                alt = "Pull request icon"
                className="m-3"
            />
            <div>
              <h3 className="fw-bold mb-0 fs-6 text-body-emphasis mb-2">Automation</h3>
              <p>A host of solutions that will help <br/>you focus on your events and automate <br/>the repetitive tasks.</p>
            </div>
          </div>
        </div>
      </div>       
    );
};

export default FeatureTabs;
