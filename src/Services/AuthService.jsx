import auth from '@react-native-firebase/auth';

//signUp function
export const signUp=async (email,password)=>{
    try{
        await auth().createUserWithEmailAndPassword(email,password);
        return {success:true};
    }
    catch(error)
    {
        return {success:false,error:error.message};
    }
};


//login function

export const login=async(email,password)=>{
    try{
        await auth().signInWithEmailAndPassword(email,password);
        return {success:true};

    }
    catch(error)
    {
        return {success: false,error:error.message};
    }
};

