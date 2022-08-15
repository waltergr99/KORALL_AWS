import { Authenticator } from "@aws-amplify/ui-react";

import '@aws-amplify/ui-react/styles.css'

const PremiumPage = () => {

    return <Authenticator>
        {( {signOut}) => (<div>
            <h1>Hola holaaa</h1>
        </div>)}
    </Authenticator>

};

export default PremiumPage;