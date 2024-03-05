import styles from './start.module.scss'
import React from 'react'
import { Button } from 'react-bootstrap'


const StartPage = () =>{
    return(
        <div className={styles.start}>
            <div className={styles.textArea}> 
            <div className={styles.welcomeText}>
            Welcome to TrendyThreads
            </div>
            <div className={styles.secondText}>
            Your Ultimate Fashion Destination
            </div>
            <div  className={styles.thiredText}>
            Explore our curated collections for Men, Women, and Kids, each carefully crafted to suit your unique taste. From chic tops to comfortable loungewear, we have something for every occasion.
            </div>
            <Button className={styles.button}>
            Start Shopping
            </Button>
            </div>
        </div>
    )
}

export default StartPage;