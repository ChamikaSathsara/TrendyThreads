import styles from './secondPage.module.scss' //
import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'


const SecondPage = () =>{
    return(
        <div className={styles.secondPage}>
            <div className={styles.textbox}>
            <p className={styles.title}>Discover Your Style</p>
            <p  className={styles.details}>Explore our curated collections for Men, Women, and Kids, each carefully crafted to suit your unique taste. From chic tops to comfortable loungewear, we have something for every occasion.</p>
            </div>
            <Container className={styles.offers}>
                <Row>
                    <div className={styles.flexBox}>
                    <Col sm={3}>
                    <Row>
                        <Col><div className={styles.box1}> 
                        <div className={styles.textbox2}>
                        <p className={styles.innerBoxTitle}>Sport Shoes</p>
                        <p className={styles.innerDescription}>Elevate your performance with our sleek and comfortable sport shoes. Designed for agility and style, conquer every stride in confidence.</p>
                        </div>
                        
                        </div></Col>
                    </Row>
                    <Row>
                        <div className={styles.flexBox}>
                        <Col><div className={styles.box2}>
                        <div className={styles.textbox3}>
                        <p className={styles.innerBoxTitle}>Ladies Bag</p>
                        <p className={styles.innerDescription}>Chic meets functionality in our ladies' bags. From elegant to casual, discover the perfect companion for any occasion.</p>
                        </div>
                             </div>
                        </Col>
                        <Col>
                        <div className={styles.box4}>
                        <div className={styles.textbox3}>
                        <p className={styles.innerBoxTitle}>Watch</p>
                        <p className={styles.innerDescription}>Timeless elegance meets modern design in our exquisite collection of watches. Elevate your look with precision and style on your wrist.</p>
                        </div>
                         </div>
                        </Col>
                        </div>
                    </Row>
                    </Col>
                    <Col sm={2}>
                    <div className={styles.box3}>
                    <div className={styles.textbox4}>
                        <p className={styles.innerBoxTitle}>Sport Shoes</p>
                        <p className={styles.innerDescription}>Elevate your performance with our sleek and comfortable sport shoes. Designed for agility and style, conquer every stride in confidence.</p>
                        </div>
                    </div>
                    </Col>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default SecondPage;