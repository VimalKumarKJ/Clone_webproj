import React from 'react';
import {motion} from 'framer-motion';

const Blog: React.FC = () => {
    return (
        <div className="container">
            <div className="d-block py-3 mb-4">
                <p>BLOG</p>
                <div className="d-flex align-items-center justify-content-between mb-3 mb-md-0 me-md-auto">
                    <h1 className="fs-2">Take a look at our latest articles <br/>and resources</h1>
                    <button type="button" className="btn btn-outline-dark">Browse all posts →</button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-5 mb-4">
                <div className="col">
                    <a href='https://www.eventhq.com/blog/growth-trajectory-at-eventhq' className='text-decoration-none'>
                        <motion.div className="card shadow rounded-4" whileHover={{ scale: 1, zIndex: 2 }}>
                            <motion.img
                                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01de1/658ae9ca2732bc22b1a5b873_Growth%20Trajectory%20at%20EventHQ.png"
                                className="card-img-top rounded-4 mx-auto mt-3 mb-2 image-fluid"
                                alt="Growth Trajectory at EventHQ"
                                style={{maxWidth: '600px'}}
                                whileHover={{ scale: 1.1 }}
                            />
                            <div className="card-body">
                                <h2 className="card-title mb-3">Growth Trajectory at EventHQ</h2>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="fw-lead fs-6">Jan 1, 2024</p>
                                    <a href='https://www.eventhq.com/blog/growth-trajectory-at-eventhq' className="text-decoration-none link-dark">Read More ↗</a>
                                </div>
                            </div>
                        </motion.div> 
                    </a>
                </div>
                <div className="col">
                    <a href='https://www.eventhq.com/blog/growth-trajectory-at-eventhq' className='text-decoration-none'>
                        <motion.div className="card shadow rounded-4"  whileHover={{ scale: 1, zIndex: 2 }}>
                            <motion.img
                                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01de1/658ae54c4f2c9fc8bf214efb_EventHQ%27s%20Approach%20to%20Hiring%20and%20Nurturing%20Talent.png"
                                className="card-img-top rounded-4 mx-auto mt-3 mb-2 image-fluid"
                                alt="Growth Trajectory at EventHQ"
                                style={{maxWidth: '600px'}}
                                whileHover={{ scale: 1.1 }}
                            />
                            <div className="card-body">
                                <h2 className="card-title mb-3">Growth Trajectory at EventHQ</h2>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="fw-lead fs-6">Jan 1, 2024</p>
                                    <a href='https://www.eventhq.com/blog/growth-trajectory-at-eventhq' className="text-decoration-none link-dark">Read More ↗</a>
                                </div>
                            </div>
                        </motion.div>
                    </a>
                </div>                 
            </div>
        </div>
    );
};

export default Blog;