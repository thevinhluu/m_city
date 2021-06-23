import { CircularProgress } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { firebase } from '../../firebase';
import { showErrorToast, showSuccessToast } from '../Utils/tools';

const SignIn = (props) => {
	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues    : {
			email    : 'luuthevinh1988@gmail.com',
			password : '123456'
		},
		validationSchema : Yup.object({
			email    : Yup.string().email('Invalid email address').required('The email is required'),
			password : Yup.string().required('The password is required')
		}),
		onSubmit         : (values) => {
			setLoading(true);
			submitForm(values);
		}
	});

	const submitForm = (values) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(values.email, values.password)
			.then(() => {
				// show success toast
				showSuccessToast('Welcome back !!');
				props.history.push('/dashboard');
			})
			.catch((error) => {
				setLoading(false);
				showErrorToast(error.message);
			});
	};

	return (
		<React.Fragment>
			{!props.user ? (
				<div className='container'>
					<div className='signin_wrapper' style={{ margin: '100px' }}>
						<form onSubmit={formik.handleSubmit}>
							<h2>Please login</h2>
							<input
								name='email'
								placeholder='Email'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
							{formik.touched.email && formik.errors.email ? (
								<div className='error_label'>{formik.errors.email}</div>
							) : null}

							<input
								placeholder='enter your password'
								name='password'
								type='password'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
							/>
							{formik.touched.password && formik.errors.password ? (
								<div className='error_label'>{formik.errors.password}</div>
							) : null}

							{loading ? (
								<CircularProgress color='secondary' className='progress' />
							) : (
								<button type='submit'>Log in</button>
							)}
						</form>
					</div>
				</div>
			) : (
				<Redirect to={'/dashboard'} />
			)}
		</React.Fragment>
	);
};

export default SignIn;
