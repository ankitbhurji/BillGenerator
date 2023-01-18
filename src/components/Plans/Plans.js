import styles from './Plans.module.css'
import logo1 from '../../Images/logo1.svg'
import logo2 from '../../Images/logo2.svg'
import logo3 from '../../Images/logo3.svg'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Plans(props){


    const [plan, setPlan] = useState('');
    const [changeCharges, setChangeCharges] = useState({isChecked:false});
    const [charges, setCharges] = useState([
        {id:1, rate:9, name:'Arcade', logo:logo1},
        {id:2, rate:12, name:'Advanced', logo:logo2},
        {id:3, rate:15, name:'Pro', logo:logo3},
    ]);
    const [planData, setPlanData] = useState({});


    function clickChange(){
     setChangeCharges({...changeCharges, isChecked:!changeCharges.isChecked});
     if(!changeCharges.isChecked){
        const newCharges = charges.map((data)=>{
            return {...data, rate: data.rate*8}
          })
          setCharges(newCharges);
     }else{
        const oldCharges = charges.map((data)=>{
            return {...data, rate: data.rate/8}
          })
          setCharges(oldCharges);
     }
    }

    function clickPlan(id, name, rate){
        setPlanData({id, name, rate});
        setPlan(id)
    }

    function clickNext(){
        if(plan==''){
            // toast('Please select the your plan !');
            toast.warn('Please select your plan !', {
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else{
            props.planInputs(planData);
            props.Steps({step1:false, step2:false, step3:true});
        }
    }

    function planBack(){
        props.PlanBack({step1:true, step2:false, step3:false})
    }


    


    return(
        <div className={styles.container}>
            <div className='row'>
                <div className='row'>
                    <div className={styles.heading1}>
                        <p>Select your plan</p>
                    </div>
                </div>
                <div className='row'>
                    <div className={styles.heading2}>
                        <p>You have the option of monthly or yearly billing</p>
                    </div>
                </div>
                <div className='row mt-4'>
                    {
                        charges.map((data, index)=>{
                            return(
                                <>
                                    <div className='col-3'>
                                        <div className={styles.planContainer1}>
                                        {/* <div key={index} className={toggleActive(index)} onClick={()=>{clickPlan(data.id, data.name, data.rate, index)}}> */}
                                        <div key={index} className={plan==index+1?(`${styles.planContainer} ${styles.planContainerActive}`):(styles.planContainer)} onClick={()=>{clickPlan(data.id, data.name, data.rate, index)}}>
                                            <div className='row'>
                                                <div className={data.id==1?(styles.logo1):data.id==2?(styles.logo2):(styles.logo3)}><img src={data.logo} /></div>
                                            </div>
                                            <div className='row'>
                                                <div className={styles.planNameRate}>
                                                    <label className={styles.planName}>{data.name}</label>
                                                    {/* <p className={styles.planRate}>{!changeCharges.isChecked?(data.rate + '$/Month'):(data.rate + '$/Year')}</p> */}
                                                    <p className={styles.planRate}>{!changeCharges.isChecked?('$' + data.rate + '/Month'):('$' + data.rate + '/Year')}</p>
                                                </div> 
                                            </div>
                                        </div>
                                        </div> 
                                    </div>  
                                </>
                            )
                        })
                    }
                    
                    {/* <div className='col-2'>
                        <div className={plan==1?(`${styles.planContainer} ${styles.planContainerActive}`):(styles.planContainer)} onClick={()=>{clickPlan(charges.plan1.id)}}>
                            <div className='row'>
                                <div className={styles.logo1}><img src={logo1} /></div>
                            </div>
                            <div className='row'>
                                <div className={styles.planNameRate}>
                                    <label className={styles.planName}>Arcade</label>
                                    <p className={styles.planRate}>{!changeCharges.isChecked?(charges.plan1.rate+'$/Month'):(charges.plan1.rate+'$/Year')}</p>
                                </div>
                            </div>
                        </div> 
                    </div> */}
                    {/* <div className='col-2'>
                        <div className={plan==2?(`${styles.planContainer} ${styles.planContainerActive}`):(styles.planContainer)} onClick={()=>{clickPlan(charges.plan2.id)}}>
                            <div className='row'>
                                <div className={styles.logo2}><img src={logo2} /></div>
                            </div>
                            <div className='row'>
                                <div className={styles.planNameRate}>
                                    <label className={styles.planName}>Advanced</label>
                                    <p className={styles.planRate}>{!changeCharges.isChecked?(charges.plan2.rate+'$/Month'):(charges.plan2.rate+'$/Year')}</p>
                                </div>
                            </div>
                        </div> 
                    </div> */}
                    {/* <div className='col-2'>
                        <div className={plan==3?(`${styles.planContainer} ${styles.planContainerActive}`):(styles.planContainer)} onClick={()=>{clickPlan(charges.plan3.id)}}>
                            <div className='row'>
                                <div className={styles.logo3}><img src={logo3} /></div>
                            </div>
                            <div className='row'>
                                <div className={styles.planNameRate}>
                                    <label className={styles.planName}>Pro</label>
                                    <p className={styles.planRate}>{!changeCharges.isChecked?(charges.plan3.rate+'$/Month'):(charges.plan3.rate+'$/Year')}</p>
                                </div>
                            </div>
                        </div> 
                    </div>    */}
                </div>
                <div className={styles.radioContainer}>
                    <div className='row'>
                        <div className='col-5'><p className={styles.monthly}>Monthly</p></div>
                            <div className='col-2'>
                                <label className={styles.switch}>
                                    {/* <input type="checkbox"  onChange={()=>{setChangeCharges({...changeCharges, isChecked:!changeCharges.isChecked})}}/> */}
                                    <input type="checkbox"  onChange={clickChange}/>
                                    <span className={`${styles.slider} ${styles.round}`}></span>
                                </label>
                            </div>
                        <div className='col-5'><div className={styles.yearly}>Yearly</div></div>
                    </div>
                </div>
                <div className={styles.button}>
                    <div className='row'>
                        <div className='col-6'>
                            <button onClick={planBack} className={`${styles.backButton} ${styles.backButton1}`}>Go Back</button>
                        </div>
                        <div className='col-6'>
                            <button onClick={clickNext} className={`${styles.nextButton} ${styles.nextButton1}`}>Next Step</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-center"
            autoClose={false}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
             />
        </div>
    )
}

export default Plans;