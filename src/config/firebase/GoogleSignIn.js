import { GoogleSignin } from "@react-native-google-signin/google-signin";
import  auth  from "@react-native-firebase/auth";

export const _signInwithGoogle=async()=>{
    try {
            GoogleSignin.configure({
                offlineAccess:false,
                   webClientId:'1043496239194-c7nhck9u1npvm4go609ddjsn2m8uakm0.apps.googleusercontent.com',

                scopes:['profile','email'],
            })
            await GoogleSignin.hasPlayServices()
            const useInfo=await GoogleSignin.signIn()
            
            const {idToken}=await GoogleSignin.signIn()
            const googleCredentials=auth.GoogleAuthProvider.credential(idToken)
            auth().signInWithCredential(googleCredentials)
            return useInfo


    } catch (error) {
        console.log('google SignIn..',error)
        return null
    }
}