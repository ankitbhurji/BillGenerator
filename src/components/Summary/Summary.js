import styles from './Summary.module.css'


function Summary(props){


    function GoBackClick(){
        props.SummaryBack({step1:false, step2:true, step3:false});
    }

    return(
        <div className={styles.summaryContainer}>
            <div className='row'>
                <div className='row'>
                    <div className={styles.summary}>Summary</div>
                </div>
                <div className='row'>
                    <div className='row'>
                        <div className='col-1'>
                            <div className={styles.detailsKeys}>Name</div>
                        </div>
                        <div className='col-6'>
                            <div className={styles.detailsValues}>&nbsp; : &nbsp; &nbsp; {props.formData.Data.name}</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'>
                            <div className={styles.detailsKeys}>Email</div>
                        </div>
                        <div className='col-6'>
                            <div className={styles.detailsValues}>&nbsp; : &nbsp; &nbsp; {props.formData.Data.email}</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'>
                            <div className={styles.detailsKeys}>Phone</div>
                        </div>
                        <div className='col-6'>
                            <div className={styles.detailsValues}>&nbsp; : &nbsp; &nbsp; {props.formData.Data.phone}</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'>
                            <div className={styles.detailsKeys}>Plan</div>
                        </div>
                        <div className='col-6'>
                            <div className={styles.detailsValues}>&nbsp; : &nbsp; &nbsp; {props.userPlanInputs.name}</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'>
                            <div className={styles.detailsKeys}>Total</div>
                        </div>
                        <div className='col-6'>
                            <div className={styles.detailsValues}>&nbsp; : &nbsp; &nbsp; ${props.userPlanInputs.rate}</div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <p className={styles.line}></p>
                </div>
                    {/* <div className={styles.totalKey}></div> */}
                <div className='row'>
                    <div className='col-7'>
                        <div className={styles.totalKey}>GrandTotal</div>
                    </div>
                    <div className='col-5'>
                        <div className={styles.totalValue}>${props.userPlanInputs.rate}</div>
                    </div>
                </div>
                <div className={styles.button}>
                    <div className='row'>
                        <div className='col-6'>
                            <button onClick={GoBackClick} className={`${styles.backButton} ${styles.backButton1}`}>Go Back</button>
                        </div>
                        <div className='col-6'>
                            <button className={`${styles.nextButton} ${styles.nextButton1}`}>Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;