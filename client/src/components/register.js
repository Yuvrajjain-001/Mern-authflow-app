import React, { useState } from 'react'
import { useFormik } from "formik";
import styles from "../styles/username.module.css";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import {Toaster} from 'react-hot-toast';
import { registerValidation } from "../helper/validate";
import convertToBase64 from '../helper/convert';

function Register() {
  const navigate = useNavigate();

  const [file,setFile]= useState();

  const formik = useFormik({
    initialValues : {
      email: 'doyol56239@cnogs.com',
      username: 'example123',
      password : 'admin@123'
    },
    validate : registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, { profile : file || ''})
      console.log(values);
      // let registerPromise = registerUser(values)
      // toast.promise(registerPromise, {
      //   loading: 'Creating...',
      //   success : <b>Register Successfully...!</b>,
      //   error : <b>Could not Register.</b>
      // });

      // registerPromise.then(function(){ navigate('/')});
    }
  })
  
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    convertToBase64(file)
      .then((result) => {
        setFile(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};
  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{ width: "45%", paddingTop: '3em'}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                Happy to join you!
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <label htmlFor="profile">
                    <img  src={file || avatar} className={styles.profile_img} alt="avatar" />
                  </label>
                  
                  <input type="file" id='profile' name='profile' onChange={handleFileChange}/>
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email*' />
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*' />
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password*' />
                  <button className={styles.btn} type='submit'>Register</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Already Register? <Link className='text-red-500' to="/">Login Now</Link></span>
              </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Register;