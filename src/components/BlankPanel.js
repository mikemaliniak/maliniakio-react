import React from 'react';

const BlankPanel = (props) => {
    const { overrides } = props;
    return ( 
        <section className="l__wrapper" style={overrides}>
            <div className="l__container">
            {props.children}
            </div>
        </section>
     );
}
 
export default BlankPanel;