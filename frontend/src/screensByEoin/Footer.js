import React from 'react';

function Footer() {

    return (
        <div className="footer">
            <div>
                <h2>Navigation or something here</h2>
                <ul>
                    <li>These</li>
                    <li>Sorts</li>
                    <li>Of</li>
                    <li>Things</li>
                </ul>
            </div>

            <div>
                <form className="contactForm">
                    <h2>Contact Us</h2>
                    <label> Name:<br/>
                        <input placeholder="hello" />
                    </label>

                    <label>Email: <br/>
                        <input type="text"/>
                    </label>

                    <label> Phone Number: <br/>
                        <input type="text"/>
                    </label>

                    <label> Message: <br/>
                        <input type="textarea"/>
                    </label>

                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default Footer;