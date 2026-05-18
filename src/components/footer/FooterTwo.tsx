import Link from 'next/link';
import React from 'react'

function FooterTwo() {
    return (
        <div>
            <>
                {/* rts footer area start */}
                <div className="rts-footer-area-two">
                    <div className="container-2">
                        <div className="row">
                            <div className="coll-lg-12">
                                <div className="footer-two-main-wrapper">
                                    <div className="footer-single-wixed-two start">
                                        <Link href="#" className="logo-area">
                                            <img
                                                src="assets/images/logo/logo-02.svg"
                                                alt="logo-area"
                                                className="logo"
                                            />
                                        </Link>
                                        <p className="disc">
                                            What’s inside: New Arrivals, Exclusive Sales, News &amp; Mores
                                        </p>
                                        <form action="#">
                                            <input type="email" placeholder="Email Address"/>
                                            <button className="rts-btn btn-primary">
                                                <i className="fa-light fa-arrow-right" />
                                            </button>
                                        </form>
                                        <div className="social-style-dash">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-youtube" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-footer-wized mid">
                                        <h3 className="footer-title">Our Stores</h3>
                                        <div className="footer-nav">
                                            <ul>
                                                <li>
                                                    <Link href="#">Delivery Information</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Privacy Policy</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Terms &amp; Conditions</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Support Center</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Careers</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-footer-wized mid">
                                        <h3 className="footer-title">Shop Categories</h3>
                                        <div className="footer-nav">
                                            <ul>
                                                <li>
                                                    <Link href="#">Contact Us</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Information</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">About Us</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Careers</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Nest Stories</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-footer-wized">
                                        <h3 className="footer-title">Need Help? / Contact Us</h3>
                                        <div className="contact-information">
                                            {/* single contact information */}
                                            <div className="single-contact-information-area">
                                                <div className="icon-area">
                                                    <img src="assets/images/icons/11.svg" alt="icons" />
                                                </div>
                                                <div className="information-area">
                                                    <p className="disc">
                                                        258 Daniel Street, 2589 Phones Line <br />
                                                        Berlin, Germany
                                                    </p>
                                                </div>
                                            </div>
                                            {/* single contact information emd */}
                                            {/* single contact information */}
                                            <div className="single-contact-information-area">
                                                <div className="icon-area">
                                                    <img src="assets/images/icons/12.svg" alt="icons" />
                                                </div>
                                                <div className="information-area">
                                                    <p className="disc">
                                                        Call us between 8:00 AM - 12PM <br />
                                                        <Link href="#">+25896 3158 3228</Link>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* single contact information emd */}
                                            {/* single contact information */}
                                            <div className="single-contact-information-area">
                                                <div className="icon-area">
                                                    <img src="assets/images/icons/13.svg" alt="icons" />
                                                </div>
                                                <div className="information-area">
                                                    <p className="disc">
                                                        Live Chat <br />
                                                        <span>Chat With an Experts</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* single contact information emd */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts footer area end */}
                {/* rts copyright area start */}
                <div className="rts-copyright-area-two">
                    <div className="container-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-arae-two-wrapper">
                                    <p className="disc">
                                        Copyright 2025 <Link href="#">©Ekomart</Link>. All rights reserved.
                                    </p>
                                    <div className="payment-processw-area">
                                        <span>Payment Accepts:</span>
                                        <img src="assets/images/payment/04.png" alt="payment" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts copyright area end */}
            </>

        </div>
    )
}

export default FooterTwo