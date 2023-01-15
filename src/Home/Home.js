import styles from './Home.module.css';
import Steps from '../components/Steps/Steps';
import Information from '../components/Information/Information';
import { useState } from 'react';

function Home(props){

    const [data, setData] = useState({});
    const [date, setdate] = useState({});
    console.log(data, date)

    return(
        <div className={styles.homeContainer}>
            <div className={styles.home}>
                <div className='row'>
                    <div className='col-4'>
                        <div className={styles.steps}>
                            <Steps DATE={setdate}/>  
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className={styles.info}>
                            <Information Data={setData}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;