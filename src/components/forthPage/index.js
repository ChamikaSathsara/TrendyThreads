import styles from './forthPage.module.scss'
import React, { useState } from 'react';
import { Col, Row} from 'react-bootstrap'

const FourthPage = () => {
 
        const [formData, setFormData] = useState({
          username: '',
          email: '',
        });
      
        const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Handle form submission, e.g., send data to server
          console.log(formData);
        };
    return (
        <div className={styles.secondPage}>
          <div className={styles.textbox}>
            <p className={styles.title}>Irresistible Offers</p>
            <p className={styles.details}>Indulge in guilt-free shopping with our exclusive discounts and promotions. Find the perfect pieces to elevate your wardrobe without breaking the bank.</p>
          </div>
          <div className={styles.offerSection}>
            <Row className={styles.offerSectionBox}>
                <Col lg={2}>
                <div className={styles.line1}>Summer Splendor 60% OFF! Unleash Your</div>
                <div className={styles.line1}>Style with <span className={styles.line2}>ActiveLite</span></div>
                <div className={styles.line3}>Dive into summer with ActiveLite and enjoy an exclusive 60% off on our entire collection! Elevate your wardrobe with our fashion-forward designs and quality craftsmanship.</div>
                <div className={styles.shopButton}>
                Shop Now 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.793 2.35993C8.98053 2.17245 9.23484 2.06714 9.5 2.06714C9.76516 2.06714 10.0195 2.17245 10.207 2.35993L14.707 6.85993C14.8945 7.04745 14.9998 7.30176 14.9998 7.56693C14.9998 7.83209 14.8945 8.0864 14.707 8.27392L10.207 12.7739C10.0184 12.9561 9.7658 13.0569 9.5036 13.0546C9.2414 13.0523 8.99059 12.9472 8.80518 12.7617C8.61977 12.5763 8.5146 12.3255 8.51233 12.0633C8.51005 11.8011 8.61084 11.5485 8.793 11.3599L11.5 8.56693H2C1.73478 8.56693 1.48043 8.46157 1.29289 8.27403C1.10536 8.0865 1 7.83214 1 7.56693C1 7.30171 1.10536 7.04735 1.29289 6.85982C1.48043 6.67228 1.73478 6.56693 2 6.56693H11.5L8.793 3.77393C8.60553 3.5864 8.50021 3.33209 8.50021 3.06693C8.50021 2.80176 8.60553 2.54745 8.793 2.35993Z" fill="#21534A"/>
                </svg>
                </div>
                </Col>
                <Col lg={2}>
                <div className={styles.imgContainer}></div>
                </Col>
            </Row>
          </div>
          <Row className={styles.subscribe}>
            <Col>
            <div className={styles.normalbold}>Join Our Newsletter for Exclusive Updates!</div>
            <div  className={styles.normal}>Stay in the loop with the latest trends, exclusive offers, and style inspiration.</div>
            </Col>
            <Col lg={2}>

            <form onSubmit={handleSubmit}>
                <input
                className={styles.email}
                type="email"
                name="email"
                placeholder='Enter Your Email'
                value={formData.email}
                onChange={handleInputChange}
                />
      <button  className={styles.submit} type="submit">Subscribe</button>
    </form>
            </Col>
          </Row>
          </div>
      );
}

export default FourthPage;