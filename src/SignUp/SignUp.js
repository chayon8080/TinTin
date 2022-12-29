import React, { useContext, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../src/contexts/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { createUser, googleSignin, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')


    const handleGoogleSignIn = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    const handleSignup = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        console.log('signup click')

        createUser(email, password)
            .then(result => {
                result = result.user
                toast('User created successfully')
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveBuyer(name, email)
                    })
                    .catch(err => alert(err.messagea))
                form.reset();
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    const saveBuyer = (name, email) => {
        const buyer = { name, email };
        fetch('https://knowledge-hub-server.vercel.app/buyers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyer)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
            })
    }


    return (
        <div className='text-center my-32'>
            <div className='w-56 mx-auto'>
                <h3 className='mb-3 -ml-10'>SIGN UP</h3>
            </div>
            <Form onSubmit={handleSignup}>
                <div>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div className='my-5'>
                    <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div className='my-5'>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div>
                    <button type='submit' className='bg-black px-16 py-3 text-white rounded-md'>Sign Up</button>

                </div>
                <p>Already have an account? <Link className='text-secondary' to='/login'>Log In</Link></p>
                <div className="divider w-52 mx-auto">OR</div>
                <div className='mx-auto p-3 rounded-md' style={{ border: "2px solid", width: '280px' }}>
                    <button onClick={handleGoogleSignIn}>Register with Google</button>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;