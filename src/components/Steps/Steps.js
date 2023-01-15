import { useState } from 'react';
import styles from './Steps.module.css';

function Steps(props){

    const [steps, setSteps] = useState({step1:true, step2:false, step3:true});


    function StepClick(){
        if(steps.step2){
            setSteps({...steps, step1:false, step3:false})
        }else if(steps.step3){
            setSteps({...steps, step1:false, step2:false})
        }else{
            setSteps({...steps, step1:true, step2:false, step3:false})
        }
    }
    props.DATE(StepClick)

    return(
        <div className={styles.stepsContainer}>
                <div className={styles.steps}>
                    <div className='row'>
                        <div className='col-4'>
                            {/* <div className={`${styles.stepNum} ${styles.stepNumIsActive}`}>1</div> */}
                            <div className={steps.step1?(`${styles.stepNum} ${styles.stepNumIsActive}`):(styles.stepNum)}>1</div>
                        </div>
                        <div className='col-8'>
                            <div className={styles.stepSeq}>STEP 1</div>
                            <div className={styles.stepName}>YOUR INFO</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            {/* <div className={styles.stepNum}>2</div> */}
                            <div className={steps.step2?(`${styles.stepNum} ${styles.stepNumIsActive}`):(styles.stepNum)}>2</div>
                        </div>
                        <div className='col-8'>
                            <div className={styles.stepSeq}>STEP 2</div>
                            <div className={styles.stepName}>SELECT PLAN</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            {/* <div className={styles.stepNum}>3</div> */}
                            <div className={steps.step3?(`${styles.stepNum} ${styles.stepNumIsActive}`):(styles.stepNum)}>3</div>
                        </div>
                        <div className='col-8'>
                            <div className={styles.stepSeq}>STEP 3</div>
                            <div className={styles.stepName}>SUMMARY</div>
                        </div>
                    </div>
                </div>
                
        </div>
    );
}

export default Steps;