import styles from './Home.module.css';
import Steps from '../components/Steps/Steps';
import Information from '../components/Information/Information';
import { useState } from 'react';
import Plans from '../components/Plans/Plans';
import Summary from '../components/Summary/Summary';

function Home(){

    const [formData, setFormData] = useState('');
    const [userPlanInputs, setUserPlanInputs] = useState({});
    const [stepData, setStepsData] = useState({step1:true, step2:false, step3:false});

    return(
        <div className={styles.homeContainer}>
            <div className={styles.home}>
                <div className='row'>
                    <div className='col-4'>
                        <div className={styles.steps}>
                            <Steps stepData={stepData}/>  
                        </div>
                    </div>
                    <div className='col-8'>
                        <div>
                            {
                                stepData.step2?(<Plans planInputs={setUserPlanInputs} Steps={setStepsData} PlanBack={setStepsData}/>)
                                :
                                stepData.step3?(<Summary userPlanInputs={userPlanInputs} formData={formData} SummaryBack={setStepsData}/>)
                                :
                                (<Information FormData={setFormData} Steps={setStepsData}/>)
                            }       
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;