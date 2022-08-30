import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"; // importo metodo per sign-in with google da firebase.utils

import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import SignInForm from "../../components/sign-in-form/sign-in-form-component";

import {AuthenticationContainer} from './authentication.style'

const Authentication= () => {


  return (
    <AuthenticationContainer>
      
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
