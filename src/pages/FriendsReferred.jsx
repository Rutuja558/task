import React from 'react'

import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export const FriendsReferred = () => {
    return (
        <>
            <Container className='friendsReferred'>
                <Row className='pb-3'>
                    <Col lg={{ span: 10, offset: 1 }} className='my-4'>
                        <p>{`UI/UX > Refer & Earn > Friends Referred`}</p>
                    </Col>
                    <Col lg={{ span: 2, offset: 1 }} md={{ span: 5 }} xs={{ span: 5 }} >
                        <p className='text-primary fw'>Your Referral Code</p>
                        <div className="code border rounded-3 text-center">EDCH54</div>
                    </Col>
                    <Col lg={{ span: 2, offset: 6 }} md={{ span: 5, offset: 1 }} xs={{ span: 5, offset: 1 }} >
                        <div className="balance border pt-3 ps-3">
                            <h6 className='text-primary'>Wallet Balance</h6>
                            <h5>₹ 500</h5>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg={{ span: 10, offset: 1 }}>
                        <h4 className='text-primary'>Friends who enrolled<span className='text-secondary'>(3)</span></h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }} className='d-flex flex-sm-row flex-column gap-3 mt-3'>
                        <div className='friends px-4 py-3'>
                            <div className="d-flex justify-content-between">
                                <h6 className='fw-semibold'>Dhiraj Saxsena</h6>
                                <p>14 Sep, 2022</p>
                            </div>
                            <p>Courses Enrolled(6)</p>
                            <div className="d-flex gap-2">
                                <div className="courses">UI/UX</div>
                                <div className="courses">Photoshop</div>
                                <div className="courses">Illustrator</div>
                            </div>
                            <div className="d-flex gap-2 mt-2">
                                <div className="courses">Python</div>
                                <div className="courses">MERN</div>
                                <div className="courses">Java</div>
                            </div>
                            <p className='mt-3'>Referral Amount <span className='fs-4 ms-1 fw-semibold'> ₹185</span></p>
                        </div>
                        <div className='friends px-4 py-3'>
                            <div className="d-flex justify-content-between">
                                <h6 className='fw-semibold'>Subhash Mishra</h6>
                                <p>15 Sep, 2022</p>
                            </div>
                            <p>Courses Enrolled(6)</p>
                            <div className="d-flex gap-2">
                                <div className="courses">UI/UX</div>
                                <div className="courses">Photoshop</div>
                                <div className="courses">Illustrator</div>
                            </div>
                            <div className="d-flex gap-2 mt-2">
                                <div className="courses">Python</div>
                                <div className="courses">MERN</div>
                                <div className="courses">Java</div>
                                <div className="courses">C++</div>
                            </div>
                            <p className='mt-3'>Referral Amount <span className='fs-4 ms-1 fw-semibold'> ₹485</span></p>
                        </div>
                        <div className='friends px-4 py-3'>
                            <div className="d-flex justify-content-between">
                                <h6 className='fw-semibold'>Prafull Kumar</h6>
                                <p>14 Sep, 2022</p>
                            </div>
                            <p>Courses Enrolled(6)</p>
                            <div className="d-flex gap-2">
                                <div className="courses">UI/UX</div>
                                <div className="courses">Photoshop</div>
                                <div className="courses">Illustrator</div>
                            </div>
                            <div className="d-flex gap-2 mt-2">
                                <div className="courses">Python</div>
                                <div className="courses">MERN</div>
                                <div className="courses">Java</div>
                                <div className="courses">C++</div>
                            </div>
                            <p className='mt-3'>Referral Amount <span className='fs-4 ms-1 fw-semibold'> ₹485</span></p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }} className='my-5'>
                        <h6 className="text-primary">Terms & Conditions</h6>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
