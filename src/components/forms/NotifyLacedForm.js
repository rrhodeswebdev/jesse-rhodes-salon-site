import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { submitFormData } from '../../utils/forms';
import FormSuccess from '../content/FormSuccess';
import { Button } from '../elements/Button';

const Form = styled.form`
	display: flex;
	padding: 40px;
	flex-direction: column;
	align-items: center;
`;

const FormHeader = styled.h3`
	font-size: 28px;
	font-weight: 300;
`;

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	width: 100%;
	margin-bottom: 20px;
`;

const Label = styled.label`
	margin-bottom: 5px;
	font-size: 16px;
	font-weight: 300;
`;

const Input = styled.input`
	border: none;
	outline: none;
	padding: 10px;
	font-size: 16px;
	font-weight: 300;
`;

const FormText = styled.span`
	font-size: 12px;
	font-weight: 300;
	margin: 10px 0;
`;

const ErrorText = styled.span`
	font-size: 14px;
	font-weight: 300;
	color: red;
	padding-top: 3px;
`;

const schema = yup.object().shape({
	firstname: yup.string().required('*Required field'),
	lastname: yup.string().required('*Required field'),
	email: yup
		.string()
		.email('Must be a valid email')
		.required('*Required field'),
});

const NotifyLacedForm = () => {
	const [successMessage, setSuccessMessage] = useState('');
	const { register, handleSubmit, reset, formState } = useForm({
		resolver: yupResolver(schema),
	});
	const { errors } = formState;
	const formId = '1850e728-5ab6-4089-b6a9-4c79a2423994';
	const context = {
		pageUri: 'https://jesserhodes.style/education/laced',
		pageName: 'Laced Hair Academy',
	};

	const onSubmit = data => {
		submitFormData(data, formId, context);
		reset();
		setSuccessMessage(
			'You have successfully signed up for notifications regarding this class.'
		);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			{successMessage && <FormSuccess message={successMessage} />}
			<FormHeader>Send Me Updates</FormHeader>
			<FormGroup>
				<Label htmlFor="firstName">First Name</Label>
				<Input type="text" ref={register} name="firstname" />
				{errors.firstname && <ErrorText>{errors.firstname.message}</ErrorText>}
			</FormGroup>
			<FormGroup>
				<Label htmlFor="firstName">Last Name</Label>
				<Input type="text" ref={register} name="lastname" />
				{errors.lastname && <ErrorText>{errors.lastname.message}</ErrorText>}
			</FormGroup>
			<FormGroup>
				<Label htmlFor="firstName">Email</Label>
				<Input type="email" ref={register} name="email" />
				{errors.email && <ErrorText>{errors.email.message}</ErrorText>}
			</FormGroup>
			<FormGroup>
				<Button margin="10px 0 0">Submit</Button>
			</FormGroup>
			<FormGroup>
				<FormText>
					<em>
						*Jesse Rhodes needs the contact information you provide to her to
						contact you about the products and services offered. You may
						unsubscribe from these communications at any time.
					</em>
				</FormText>
			</FormGroup>
		</Form>
	);
};

export default NotifyLacedForm;
