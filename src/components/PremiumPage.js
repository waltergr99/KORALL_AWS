import { Authenticator } from "@aws-amplify/ui-react";

import '@aws-amplify/ui-react/styles.css'
import Router from "./comons/Router";

const PremiumPage = () => {

    return <Authenticator >
        {( {signOut}) => (<Router/>)}
    </Authenticator>

};

export default PremiumPage;