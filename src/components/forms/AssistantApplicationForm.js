import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { submitFormData } from '../../utils/forms';
import FormSuccess from '../content/FormSuccess';
import { Button } from '../elements/Button';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 750px;
	width: 100%;
	margin: 0 auto 40px;
	padding: 0 40px;
`;

const FormHeader = styled.h2`
	font-size: 36px;
	font-weight: 300;
	text-align: center;
	margin-bottom: 40px;
`;

const Column = styled.div`
	display: flex;
	flex-direction: ${props => props.direction && props.direction};
	flex-wrap: wrap;
	margin-bottom: 20px;

	div:nth-child(1) {
		padding-right: 5px;
	}
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: ${props => (props.direction ? props.direction : 'column')};
	flex-wrap: ${props => props.wrap && 'wrap'};
	width: ${props => (props.width ? props.width : '100%')};
`;

const Label = styled.label`
	font-size: 18px;
	margin-bottom: 10px;
	font-weight: 300;
`;

const Input = styled.input`
	font-size: 18px;
	font-weight: 300;
	padding: 10px;
	outline: none;
	border: 1px solid #c8c2b9;
`;

const Select = styled.select`
	font-size: 18px;
	font-weight: 300;
	padding: 10px;
	outline: none;
	border: 1px solid #c8c2b9;
`;

const TextArea = styled.textarea`
	font-size: 18px;
	font-weight: 300;
	padding: 10px;
	outline: none;
	border: 1px solid #c8c2b9;
	resize: none;
	height: 150px;
`;

const ErrorText = styled.span`
	font-size: 14px;
	font-weight: 300;
	color: red;
	padding-top: 3px;
`;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
	firstname: yup.string().required('*Required field'),
	lastname: yup.string().required('*Required field'),
	email: yup
		.string()
		.email('Must be a valid email')
		.required('*Required field'),
	phone: yup
		.string()
		.matches(phoneRegExp, '*Phone number is not valid')
		.required('*Required field'),
	styling_experience: yup.string().required('*Required field'),
	years_of_experience: yup.string().when('styling_experience', {
		is: 'Licensed Stylist',
		then: yup.string().required('*Required field'),
	}),
	about_yourself: yup.string().required('*Required field'),
	why_mentorship_program: yup.string().required('*Required field'),
});

const MentorshipApplicationForm = () => {
	const [successMessage, setSuccessMessage] = useState('');
	const { register, handleSubmit, reset, errors, watch } = useForm({
		resolver: yupResolver(schema),
	});
	const { styling_experience } = watch();
	const formId = 'e2434168-74e1-4389-8bf1-d2fae1d0b6c7';
	const context = {
		pageUri: 'https://jesserhodes.style/education/mentor',
		pageName: 'Mentorship',
	};

	const onSubmit = data => {
		submitFormData(data, formId, context);
		reset();
		setSuccessMessage(
			'Thank you for submitting your application. I will review your information and be in touch.'
		);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormHeader>Application</FormHeader>
			{successMessage && <FormSuccess message={successMessage} />}
			<Column>
				<InputGroup width="50%">
					<Label>First Name</Label>
					<Input type="text" ref={register} name="firstname" />
					{errors.firstname && (
						<ErrorText>{errors.firstname.message}</ErrorText>
					)}
				</InputGroup>
				<InputGroup width="50%">
					<Label>Last Name</Label>
					<Input type="text" ref={register} name="lastname" />
					{errors.lastname && <ErrorText>{errors.lastname.message}</ErrorText>}
				</InputGroup>
			</Column>
			<Column>
				<InputGroup width="50%">
					<Label>Email</Label>
					<Input type="email" ref={register} name="email" />
					{errors.email && <ErrorText>{errors.email.message}</ErrorText>}
				</InputGroup>
				<InputGroup width="50%">
					<Label>Phone Number</Label>
					<Input type="tel" name="phone" ref={register} />
					{errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
				</InputGroup>
			</Column>
			<Column>
				<InputGroup>
					<Label>Styling Experience</Label>
					<Select name="styling_experience" ref={register} defaultValue="">
						<option disabled></option>
						<option>Current Student</option>
						<option>Licensed Stylist</option>
					</Select>
					{errors.styling_experience && (
						<ErrorText>{errors.styling_experience.message}</ErrorText>
					)}
				</InputGroup>
			</Column>
			{styling_experience === 'Licensed Stylist' && (
				<Column>
					<InputGroup>
						<Label>Years of Experience</Label>
						<Select name="years_of_experience" ref={register} defaultValue="">
							<option disabled></option>
							<option>0-1 years</option>
							<option>1-3 years</option>
							<option>3-5 years</option>
							<option>5+ years</option>
						</Select>
						{errors.years_of_experience && (
							<ErrorText>{errors.years_of_experience.message}</ErrorText>
						)}
					</InputGroup>
				</Column>
			)}
			<Column>
				<InputGroup>
					<Label>Tell me about yourself</Label>
					<TextArea name="about_yourself" ref={register} />
					{errors.about_yourself && (
						<ErrorText>{errors.about_yourself.message}</ErrorText>
					)}
				</InputGroup>
			</Column>
			<Column>
				<InputGroup>
					<Label>Why are you interested in this program?</Label>
					<TextArea name="why_mentorship_program" ref={register} />
					{errors.why_mentorship_program && (
						<ErrorText>{errors.why_mentorship_program.message}</ErrorText>
					)}
				</InputGroup>
			</Column>
			<Column>
				<InputGroup>
					<Button margin="10px 0 0">Submit</Button>
				</InputGroup>
			</Column>
		</Form>
	);
};

export default MentorshipApplicationForm;
