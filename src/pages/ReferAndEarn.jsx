import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { IoIosPeople } from "react-icons/io";
import { HiTag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdAccountBalanceWallet } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export const ReferAndEarn = () => {
    const [screenSize, setscreenSize] = useState(false)
    const navigate = useNavigate()
    const handleResize = () => window.matchMedia("(max-width:450px)").matches ? setscreenSize(true) : setscreenSize(false)
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return (
        <Container>
            <Row>
                <Col lg={{ span: 10, offset: 1 }} className='my-4'>
                    <p>{`UI/UX > Refer & Earn`}</p>
                </Col>
                <Col lg={{ span: 5, offset: 1 }}>
                    <div className="withdrawBox pt-3 px-3 ">
                        {screenSize
                            ? <>
                                <div className="d-flex justify-content-between">
                                    <div className="column1">
                                        <h6 className="text-primary">Referral Earning</h6>
                                        <h3>₹ 2,500</h3>
                                    </div>
                                    <div className="column2">
                                        <h6 className="text-primary">Total Referrals</h6>
                                        <h3>7</h3>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="column3">
                                        <h6 className="text-primary">Wallet Balance</h6>
                                        <h3>₹ 500</h3>
                                    </div>
                                    <Button className='withdraw-btn mt-4'>Withdraw Balance</Button>
                                </div>
                            </>
                            : <>
                                <div className="d-flex justify-content-between">
                                    <div className="column1">
                                        <h6 className="text-primary">Referral Earning</h6>
                                        <h3>₹ 2,500</h3>
                                    </div>
                                    <div className="column2">
                                        <h6 className="text-primary">Total Referrals</h6>
                                        <h3>7</h3>
                                    </div>
                                    <div className="column3">
                                        <h6 className="text-primary">Wallet Balance</h6>
                                        <h3>₹ 500</h3>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Button className='withdraw-btn mt-4'>Withdraw Balance</Button>
                                </div>
                            </>}
                    </div>
                </Col>
                <Col lg={{ span: 4, offset: 1 }}>
                    <h4 className="text-primary">Your Referral Code</h4>
                    <div className="refCode pt-2 text-center mt-3">
                        <p >EDCH54</p>
                    </div>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg={{ span: 10, offset: 1 }}>
                    <h5 className="text-primary">How does it work ?</h5>
                </Col>
                <Col lg={{ span: 4, offset: 1 }} className='mt-3'>
                    <div className="d-flex gap-4 align-items-center">
                        <div className="icon text-center rounded-circle" color='linear-gradient(to right, #FF864C 0%, #800080 80%)'><IoIosPeople size="1.8rem" /></div>
                        <div className="info">
                            <div>Invite your friends</div>
                            <p className='desc'>Share the link tutedude.com with your friends</p>
                        </div>
                    </div>
                </Col>
                <Col lg={{ span: 4 }} className='mt-3'>
                    <div className="d-flex gap-4 align-items-center">
                        <div className="icon text-center rounded-circle" color='linear-gradient(to right, #FF864C 0%, #800080 80%)'><HiTag size="1.8rem" /></div>
                        <div className="info">
                            <div>Friend purchases any course</div>
                            <p className='desc'>Using your REFERRAL CODE in the payments page</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={{ span: 4, offset: 1 }} className='mt-3'>
                    <div className="d-flex gap-4 align-items-center">
                        <div className="icon text-center rounded-circle" color='linear-gradient(to right, #FF864C 0%, #800080 80%)'><BiRupee size="1.8rem" /></div>
                        <div className="info">
                            <div>You get ₹ 200 as referral money</div>
                            <p className='desc'>On total purchase the friend makes, into your wallet</p>
                        </div>
                    </div>
                </Col>
                <Col lg={{ span: 4 }} className='mt-3'>
                    <div className="d-flex gap-4 align-items-center">
                        <div className="icon text-center rounded-circle" color='linear-gradient(to right, #FF864C 0%, #800080 80%)'><AiOutlinePercentage size="1.8rem" /></div>
                        <div className="info">
                            <div>Your Friend gets ₹ 200 Off</div>
                            <p className='desc'>On his overall fee on successful purchase using your referral code</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={{ span: 4, offset: 1 }} className='mt-3'>
                    <div className="d-flex gap-4 align-items-center">
                        <div className="icon text-center rounded-circle" color='linear-gradient(to right, #FF864C 0%, #800080 80%)'><MdAccountBalanceWallet size="1.8rem" /></div>
                        <div className="info">
                            <div>Transfer money from wallet</div>
                            <p className='desc'>When the wallet balance reaches ₹200 or more, you can withdraw it</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col lg={{ span: 4, offset: 1 }}>
                    <p className='text-primary fw-semibold' onClick={e => navigate('/friendsReferred')}>Friends Who Enrolled</p>
                    <p className='text-primary fw-semibold'>Terms & Conditions</p>
                </Col>
            </Row>
        </Container>
    )
}
