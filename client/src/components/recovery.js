import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "../styles/username.module.css";
import {  useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { passwordValidate } from "../helper/validate";

function Recovery() {
	const navigate = useNavigate();
	// const setUsername = useAuthStore(state => state.setUsername);

	const [OTP, setOTP] = useState();

	// const formik = useFormik({
	// 	initialValues: {
	// 		password: ""
	// 	},
	// 	validate: passwordValidate,
	// 	validateOnBlur: false,
	// 	validateOnChange: false,
	// 	onSubmit: async (values) => {
	// 		// setUsername(values.username);
	// 		// navigate('/password')
	// 		console.log(values);
	// 	}
	// });

	return (
		<div className="container mx-auto">
			<Toaster position="top-center" reverseOrder={false}></Toaster>

			<div className="flex justify-center items-center h-screen">
				<div className={styles.glass}>
					<div className="title flex flex-col items-center">
						<h4 className="text-5xl font-bold">Recovery</h4>
						<span className="py-4 text-xl w-2/3 text-center text-gray-500">Enter OTP to recover password.</span>
					</div>

					<form className="pt-20" >
						<div className="textbox flex flex-col items-center gap-6">
							<div className="input text-center">
								<span className="py-4 text-sm text-left text-gray-500">
									Enter 6 digit OTP sent to your email address.
								</span>
								<input
									onChange={(e) => setOTP(e.target.value)}
									className={styles.textbox}
									type="text"
									placeholder="OTP"
								/>
							</div>

							<button className={styles.btn} type="submit">
								Recover
							</button>
						</div>
					</form>

					<div className="text-center py-4">
						<span className="text-gray-500">
							Can't get OTP?{" "}
							<button className="text-red-500">
								Resend
							</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Recovery;
