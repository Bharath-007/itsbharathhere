import React, { useEffect, useState } from 'react';
import './FlexContainer.scss'; // Assuming you save your CSS in this file

const FlexContainer = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const images = new Image();
        images.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/lake-macquarie-71208_1920.jpg';
        images.onload = () => setLoading(false);
    }, []);

    return (
        <div className="flex-container">
            {loading && (
                <div className="spinner">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                    Loading...
                </div>
            )}
            <div className={`flex-slide home ${loading ? 'hidden' : ''}`}>
                <div className="flex-title flex-title-home">Home</div>
                <div className="flex-about flex-about-home">
                    <p>Click here to navigate to the home section of the website</p>
                </div>
            </div>
            <div className={`flex-slide about ${loading ? 'hidden' : ''}`}>
                <div className="flex-title">About</div>
                <div className="flex-about">
                    <p>Click here to navigate to the About section of the website</p>
                </div>
            </div>
            <div className={`flex-slide work ${loading ? 'hidden' : ''}`}>
                <div className="flex-title">Work</div>
                <div className="flex-about">
                    <p>Listing relevant snippets of work:</p>
                    <ul>
                        <li>First piece of work</li>
                        <li>Second piece of work</li>
                        <li>Third piece of work</li>
                    </ul>
                </div>
            </div>
            <div className={`flex-slide contact ${loading ? 'hidden' : ''}`}>
                <div className="flex-title">Contact</div>
                <div className="flex-about">
                    <p>Use the contact form below</p>
                    <form className="contact-form">
                        <p>Email: <input type="text" name="email" /></p>
                        <p>Comment: <textarea name="comment"></textarea></p>
                        <p><input type="submit" value="Send Message" /></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FlexContainer;
