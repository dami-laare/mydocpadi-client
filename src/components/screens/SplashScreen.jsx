import React, { useEffect, useState } from 'react'
import classes from './SplashScreen.module.css'
import { CSSTransition } from 'react-transition-group';

const SplashScreen = () => {
    const [inProp, setInProp] = useState(false);
    const [show, setShow ] = useState(false);
    
    // const navigate = useNavigate();

    useEffect(() => {
        setInProp(true);
        setShow(true)
        
        setTimeout(() => {
            setInProp(false)
        }, 4000)

        // setTimeout(() => {
        //     navigate('sign-up/welcome')
        // }, 5000)
    }, []);

    return (
        <CSSTransition
            classNames='splash'
            timeout={1000}
            in={inProp}
        >  
            <div className={classes.container}>
                {show && (
                    <div className={classes.main}>
                        <img className={classes.image} src={`${process.env.PUBLIC_URL}/images/splash_logo.png`} alt='Splash screen logo' />
                        <h1 className={classes.heading}>Good Health. Living Smart</h1>
                    </div>
                )}
            </div>
        </CSSTransition>
    )
}

export default SplashScreen