import React from 'react';
import login from '../assets/images/login/login.svg'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 p-4 items-center mb-20">
                <div>
                    <img className="w-96" src={login} alt="" />
                </div>
                <form>
                    <div className="bg-slate-200 rounded-md shadow-md p-6">
                        <h1 className="text-5xl font-bold text-center">Log-In</h1>
                        <div className="md:w-[90%] w-full mx-auto mt-16">
                            <label className="font-semibold mb-5" htmlFor="">Name</label> <br />
                            <input className="w-full p-3 my-2 rounded-md" type="name" name="name" placeholder="Enter your name" />
                            <label className="font-semibold mb-5" htmlFor="">Email</label> <br />
                            <input className="w-full p-3 my-2 rounded-md" type="email" name="email" placeholder="Enter your email" />
                            <label className="font-semibold mb-5" htmlFor="">Confirm Password</label>
                            <input className="w-full p-3 my-2 rounded-md" type="password" name="password" placeholder="Enter your password" /> <br />
                            
                            <button className="text-center block font-semibold mx-auto w-full bg-red-600 text-white my-8 rounded-md p-3">Register Now</button>
                        </div>
                        <h1 className="text-center">Have an account? <Link className="text-blue-700 font-semibold" to="/login">Lon In</Link></h1>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;