import React from 'react';
import { Link } from 'gatsby';
import image from './../images/favicon/favicon-32x32.png';

const FormSubmission = () => {
    return(
        <div>
            <h1>Thank You for Your Submission!</h1>
            <p>I appreciate you reaching out and I will be in touch with you soon! 😀</p>
            <Link to='/index' ><img src={image} alt='back' /></Link>
        </div>
    )
};

export default FormSubmission;