import styles from './thirdPage.module.scss' 
import React from 'react';
// import {Container, Col, Row} from 'react-bootstrap'
import jsonData from '../../assets/data/sample1.json'


const ThirdPage = () =>{




 

    

      return (
        <div className={styles.secondPage}>
        <div className={styles.textbox}>
          <p className={styles.title}>Latest Arrivals</p>
          <p className={styles.details}>Be the first to embrace the hottest trends with our New Arrivals section. Our team of fashion enthusiasts handpicks the latest styles, ensuring you stay ahead of the curve.</p>
        </div>
        <div className={styles.tabsSection}>
          <p className={styles.tabActive}>Shirts</p>
          <p className={styles.tabInActive}>Shorts</p>
          <p className={styles.tabInActive}>Jackets</p>
          <p className={styles.tabInActive}>Trousers</p>
          <p className={styles.tabInActive}>Shoes</p>
          <p className={styles.tabInActive}>Accessories</p>
        </div>
  
        <div className={styles.cardSection}>
          {jsonData.map(item => (
            <div className={styles.card} key={item.id}>
              <div className={styles.card}>
              <div className={styles.cardImage}>
                {/* Adjust the image path according to your project structure */}
                {/* <img src={require(item.image).default} alt="Card image cap" /> */}
              </div>
              <p className={styles.innerprice}>{item.price}LKR</p>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                  <p className={styles.innerTitle}>{item.name}</p>
                  <p className={styles.innerDec}>{item.description}</p>
                </div>
                
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
      );
    };

export default ThirdPage;