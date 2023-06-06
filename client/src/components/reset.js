import React from "react";
import { useFormik } from "formik";
import styles from "../styles/username.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { resetPasswordValidation } from "../helper/validate";

function Reset() {
	const navigate = useNavigate();
	// const setUsername = useAuthStore(state => state.setUsername);


  const formik = useFormik({
    initialValues : {
      password : 'admin@123',
      confirm_pwd: 'admin@123'
    },
    validate : resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      
      // let resetPromise = resetPassword({ username, password: values.password })

      // toast.promise(resetPromise, {
      //   loading: 'Updating...',
      //   success: <b>Reset Successfully...!</b>,
      //   error : <b>Could not Reset!</b>
      // });

      // resetPromise.then(function(){ navigate('/password') })

    }
  })

	return (
		<div className="container mx-auto">
			<Toaster position="top-center" reverseOrder={false}></Toaster>

			<div className="flex justify-center items-center h-screen">
				<div className={styles.glass} style={{ width: "50%" }}>
					<div className="title flex flex-col items-center">
						<h4 className="text-5xl font-bold">Reset</h4>
						<span className="py-4 text-xl w-2/3 text-center text-gray-500">Enter new password.</span>
					</div>

					<form className="py-20" onSubmit={formik.handleSubmit}>
						<div className="textbox flex flex-col items-center gap-6">
							<input
								{...formik.getFieldProps("password")}
								className={styles.textbox}
								type="text"
								placeholder="New Password"
							/>
							<input
								{...formik.getFieldProps("confirm_pwd")}
								className={styles.textbox}
								type="text"
								placeholder="Repeat Password"
							/>
							<button className={styles.btn} type="submit">
								Reset
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Reset;
