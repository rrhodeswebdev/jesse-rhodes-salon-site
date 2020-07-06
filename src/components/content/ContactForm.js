import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { submitFormData } from '../../utils/forms';
import FormSuccess from './FormSuccess';

const Form = styled.form`
	width: 100%;
`;

const Group = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
	width: ${props => props.width && props.width};
	padding: ${props => props.padding && props.padding};
`;

const ColContainer = styled.div`
	display: flex;
`;

const Label = styled.label`
	font-weight: 300;
	font-size: 16px;
	margin-bottom: 5px;
`;

const Input = styled.input`
	box-sizing: border-box;
	border: 1px solid #c8c2b9;
	border-radius: 0;
	outline: none;
	padding: 10px;
	margin-bottom: 5px;
	font-weight: 300;

	&:-webkit-autofill,
	-webkit-autofill:hover,
	-webkit-autofill:focus {
		transition: background-color 5000s ease-in-out 0s;
	}
`;

const Select = styled.select`
	border: 1px solid #c8c2b9;
	border-radius: 0;
	padding: 10px;
	font-weight: 300;
	outline: none;
	margin-bottom: 5px;
`;

const TextArea = styled.textarea`
	resize: none;
	outline: none;
	border: 1px solid #c8c2b9;
	padding: 10px;
	margin-bottom: 5px;
	font-weight: 300;

	&:-webkit-autofill,
	-webkit-autofill:hover,
	-webkit-autofill:focus {
		transition: background-color 5000s ease-in-out 0s;
	}
`;

const Button = styled.button`
	cursor: pointer;
	padding: 10px;
	font-weight: 300;
	font-size: 18px;
	text-transform: uppercase;
	border: 1px solid #c8c2b9;
	border-radius: 0;
	background-color: #c8c2b9;
	outline: none;

	&:hover {
		background-color: #b18e72;
		color: white;
		transition: 0.15s ease;
	}
`;

const ErrorText = styled.span`
	font-size: 14px;
	font-weight: 300;
	color: red;
`;

const FormText = styled.span`
	font-size: 12px;
	font-weight: 300;
	margin: 10px 0;
`;

const ContactForm = () => {
	const [successMessage, setSuccessMessage] = useState('');
	const { register, handleSubmit, errors, reset } = useForm();
	const formId = 'a8dbe954-c457-41f1-8292-fd3b55fef13c';
	const context = {
		pageUri: 'https://jesserhodes.style/contact',
		pageName: 'Contact',
	};

	const onSubmit = data => {
		submitFormData(data, formId, context);
		reset();
		setSuccessMessage(
			'Thank you for reaching out. I will be in touch with you as soon as possible.'
		);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			{successMessage && <FormSuccess message={successMessage} />}
			<Group>
				<Label htmlFor="email">Email</Label>
				<Input
					type="text"
					name="email"
					ref={register({ required: true })}
				/>
				{errors.email && <ErrorText>This field is required</ErrorText>}
			</Group>
			<ColContainer>
				<Group width="50%" padding="0 5px 0 0">
					<Label htmlFor="firstname">First Name</Label>
					<Input
						type="text"
						name="firstname"
						ref={register({ required: true })}
					/>
					{errors.firstname && (
						<ErrorText>This field is required</ErrorText>
					)}
				</Group>
				<Group width="50%" padding="0 0 0 5px">
					<Label htmlFor="lastname">Last Name</Label>
					<Input
						type="text"
						name="lastname"
						ref={register({ required: true })}
					/>
					{errors.lastname && (
						<ErrorText>This field is required</ErrorText>
					)}
				</Group>
			</ColContainer>
			<Group>
				<Label htmlFor="reason_of_contact">Reason of Contact</Label>
				<Select
					name="reason_of_contact"
					ref={register({ required: true })}
				>
					<option value="" defaultValue></option>
					<option value="Appointments">Appointments</option>
					<option value="Services">Services</option>
					<option value="Education">Education</option>
					<option value="Other">Other</option>
				</Select>
				{errors.reason_of_contact && (
					<ErrorText>This field is required</ErrorText>
				)}
			</Group>
			<Group>
				<Label htmlFor="message">How can I help you?</Label>
				<TextArea
					name="message"
					id=""
					cols="30"
					rows="10"
					ref={register({ required: true })}
				></TextArea>
				{errors.message && (
					<ErrorText>This field is required</ErrorText>
				)}
			</Group>
			<Group>
				<Button type="submit">Submit</Button>
			</Group>
			<Group>
				<FormText>
					<em>
						*Jesse Rhodes needs the contact information you provide
						to her to contact you about the products and services
						offered. You may unsubscribe from these communications
						at any time.
					</em>
				</FormText>
			</Group>
		</Form>
	);
};

export default ContactForm;
