


const Login = () => {



    return (
        <div>

            <div className="hero ">
                <div className="hero-content flex-col ">

                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-red-800 text-yellow-300 font-bold text-xl">Login</button>
                        </div>
                    </form>
                    </div>
                    </div>


                </div>

                
                );
};

                export default Login;