import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Register = () => {
    const [errorMessage, setError] = useState('')
    const [success,setSuccess]= useState('');
    const [eye,setEye]= useState(false);

    const handleEye =()=>{
        setEye(!eye)
    }

    const handleSignUp = e => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('');
        setSuccess('');

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

        if(!passwordRegex.test(password)){
            setError('Password should contain atleast one lowercase, one uppercase, one number, one special character, and a minimum length of 6');
            return;
        }


        

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess('Successfully signed up')
            })
            .catch((error) => {
                console.log("Error", error.message);
                setError(' "Email already used" !! ');

            })
    }
    return (
        <div>

            <div className="hero ">
                <div className="hero-content flex-col ">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={eye?"text":"password"} name="password" placeholder="password" className="input input-bordered" required />

                                {/* nicher line er last e type button ta na dile auto reload khay page after clicking the eye icon  */}
                                <button onClick={handleEye} className="absolute right-3 top-14" type="button">
                                   {
                                    eye? <FaEye/>:  <IoIosEyeOff  />
                                   }
                                    </button>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onSubmit={handleSignUp}  className="btn bg-red-800 text-yellow-300 font-bold text-xl outline outline-offset-4 outline-white">Register</button>
                            </div>
                        </form>

                        {
                            errorMessage && <p className="text-center text-red-600">{errorMessage}</p>
                        }

                        {
                            success && <p className="text-green-600 ">{success}</p>
                        }


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;