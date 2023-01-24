import React from 'react';
import { useEffect } from 'react';
import { Link } from 'gatsby';
import image from './../images/favicon/favicon-32x32.png';
import './../styles/form-submission.css';
import close from './../images/close_FILL0_wght400_GRAD0_opsz48.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FormSubmission = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out-back',
            once: true,       
        });
      }, []);

    return(
        <div className='fs-main' >
            <Link to='/' id='close' ><img src={close} alt='back' /></Link>
            <div>
                <h1 id='fs-title' data-aos="zoom-in-right" >Thank You for Your Submission!</h1>
                <h3 id='fs-copy' data-aos="zoom-in-left" data-aos-duration='3000' >
                    I appreciate you reaching out and 
                    I will be in touch with you soon! 😀
                </h3>
            </div>
        </div>
    )
};

export default FormSubmission;

export { Head } from "./index";