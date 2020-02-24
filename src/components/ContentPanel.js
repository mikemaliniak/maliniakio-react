import React from 'react';
import logo from '../assets/svg/logo.svg';

const ContentPanel = () => {
    return ( 
        <section className="l-wrapper">
            <div className="l__container content-panel__wrapper">
                <div className="content-panel__col content-panel__col--text-outer">
                    <div className="content-panel__col--text-inner">
                        <h2>About me</h2>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
                        <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
                    </div>
                </div>
                <div className="content-panel__col">
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
                    <img src={logo} alt=""/>
                </div>
            </div>
        </section>
     );
}
 
export default ContentPanel;