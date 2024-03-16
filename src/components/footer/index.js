import React from "react";  
import styles from './footer.module.scss'
import { Container,Col ,Row} from "react-bootstrap";


const Footer = () => {
    return(
        <div className={styles.footer}>
           <Container>
         <Row  className={styles.footercols}>
                <Col className={styles.footerText1}>
                    <div >
                    <p>TrendyThreads</p>
                    <p>Your Ultimate Fashion Destination</p>
                    <p className={styles.titles}>Explore our curated collections for Men, Women, and Kids, each carefully crafted to suit your unique taste. From chic tops to comfortable loungewear, we have something for every occasion.s</p>
                    </div>
                </Col>
                <Col   className={styles.footerText2}>
                <div>
                    <p className={styles.titles}>Quick Links</p>
                    <p className={styles.innertext}>About Us</p>
                    <p className={styles.innertext}>Contact Us</p>
                    <p className={styles.innertext}>FAQs</p>
                    <p className={styles.innertext}>Shipping</p>
                    </div>
                </Col>
                <Col className={styles.footerText2}>
                <div>
                    <p className={styles.titles}>Shop</p> 
                    <p className={styles.innertext}>Men’s Product</p>
                    <p className={styles.innertext}>Women’s Products</p>
                    <p className={styles.innertext}>Kids Products</p>
                    <p className={styles.innertext}>Accessions</p>
                    <p className={styles.innertext}>Winter Collection</p>
                    </div>
                </Col>
                <Col className={styles.footerText2}>
                <div>
                    <p className={styles.titles}> Support</p>
                    <p className={styles.innertext}>Order State</p>
                    <p className={styles.innertext}>Shipping & Delivery</p>
                    <p className={styles.innertext}>Exchange Product</p>
                    <p className={styles.innertext}>Service Product</p>
                    <p className={styles.innertext}>Return Product</p>
                    </div>
                </Col>
            </Row>
            </Container>
            <div className={styles.footerText}>
            <p>Copyright © 2023 chmixArto®. All Rights Reserved.</p>
            <div>
            <svg width="165" height="33" viewBox="0 0 165 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_259)">
<path d="M8.81539 22.0575C7.24171 23.2936 5.43547 24.2004 3.50415 24.7242C3.29142 24.8014 3.10763 24.9422 2.97774 25.1275C2.84786 25.3128 2.77818 25.5337 2.77818 25.76C2.77818 25.9863 2.84786 26.2071 2.97774 26.3924C3.10763 26.5777 3.29142 26.7186 3.50415 26.7958C18.7547 33.0546 28.4515 23.3798 26.975 12.6472L29.4433 7.53427H26.5783C23.0081 3.14864 13.5316 3.36902 15.0963 12.7133C15.0963 12.7133 10.0275 13.6168 3.54823 7.24777C3.39835 7.0998 3.2092 6.99788 3.00319 6.95408C2.79718 6.91028 2.58293 6.92645 2.38582 7.00065C2.18871 7.07486 2.01699 7.204 1.89101 7.37278C1.76503 7.54157 1.69005 7.74292 1.67497 7.95299C0.989868 10.7692 1.33272 13.7374 2.64179 16.3232C3.95087 18.909 6.14014 20.9425 8.81539 22.0575Z" fill="white" stroke="white" stroke-width="1.34146" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path d="M95.2439 16.0977C95.2439 8.69286 89.2342 2.68311 81.8293 2.68311C74.4244 2.68311 68.4147 8.69286 68.4147 16.0977C68.4147 22.5904 73.0293 27.9965 79.1464 29.2441V20.1221H76.4635V16.0977H79.1464V12.7441C79.1464 10.1551 81.2525 8.04896 83.8415 8.04896H87.1952V12.0733H84.5122C83.7744 12.0733 83.1708 12.677 83.1708 13.4148V16.0977H87.1952V20.1221H83.1708V29.4453C89.9452 28.7746 95.2439 23.0599 95.2439 16.0977Z" fill="#FFE6E6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M136.829 14.7561C136.829 9.69746 136.829 7.16746 138.401 5.59661C139.972 4.02441 142.502 4.02441 147.561 4.02441H150.244C155.303 4.02441 157.833 4.02441 159.403 5.59661C160.976 7.16746 160.976 9.69746 160.976 14.7561V17.439C160.976 22.4977 160.976 25.0277 159.403 26.5986C157.833 28.1708 155.303 28.1708 150.244 28.1708H147.561C142.502 28.1708 139.972 28.1708 138.401 26.5986C136.829 25.0277 136.829 22.4977 136.829 17.439V14.7561ZM156.951 10.061C156.951 10.5947 156.739 11.1065 156.362 11.4838C155.984 11.8612 155.473 12.0732 154.939 12.0732C154.405 12.0732 153.894 11.8612 153.516 11.4838C153.139 11.1065 152.927 10.5947 152.927 10.061C152.927 9.52733 153.139 9.01552 153.516 8.63816C153.894 8.2608 154.405 8.0488 154.939 8.0488C155.473 8.0488 155.984 8.2608 156.362 8.63816C156.739 9.01552 156.951 9.52733 156.951 10.061ZM151.585 17.439C151.585 18.1506 151.303 18.833 150.8 19.3362C150.296 19.8393 149.614 20.122 148.902 20.122C148.191 20.122 147.508 19.8393 147.005 19.3362C146.502 18.833 146.219 18.1506 146.219 17.439C146.219 16.7275 146.502 16.0451 147.005 15.5419C147.508 15.0388 148.191 14.7561 148.902 14.7561C149.614 14.7561 150.296 15.0388 150.8 15.5419C151.303 16.0451 151.585 16.7275 151.585 17.439ZM154.268 17.439C154.268 18.8622 153.703 20.227 152.697 21.2333C151.69 22.2396 150.326 22.8049 148.902 22.8049C147.479 22.8049 146.114 22.2396 145.108 21.2333C144.102 20.227 143.537 18.8622 143.537 17.439C143.537 16.0159 144.102 14.6511 145.108 13.6448C146.114 12.6385 147.479 12.0732 148.902 12.0732C150.326 12.0732 151.69 12.6385 152.697 13.6448C153.703 14.6511 154.268 16.0159 154.268 17.439Z" fill="#FFF4F4"/>
<defs>
<clipPath id="clip0_4_259">
<rect width="30.8537" height="30.8537" fill="white" transform="translate(0 1.34155)"/>
</clipPath>
</defs>
</svg>

            </div>
            </div>
        </div>
    )
}

export default Footer;