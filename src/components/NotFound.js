import React from 'react';
import BlankPanel from './BlankPanel'
import WarningIcon from '@material-ui/icons/Warning';

const NotFound = () => {
    return ( 
        <div>
            <BlankPanel>
                <WarningIcon/><h6>404: Page not found</h6>
            </BlankPanel>
        </div>
     );
}
 
export default NotFound;