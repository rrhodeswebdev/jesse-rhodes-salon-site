import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '../elements/Button';
import { submitFormData } from '../../utils/forms';
import FormSuccess from '../content/FormSuccess';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 800px;
	width: 100%;
	margin: 20px auto;
	padding: 0 40px;

	@media screen and (max-width: 625px) {
		flex-direction: column;
	}
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	width: ${props => (props.width ? props.width : '100%')};
	padding-left: ${props => props.marginLeft && props.marginLeft};
	padding-right: ${props => props.marginRight && props.marginRight};
	margin-bottom: 20px;

	@media screen and (max-width: 625px) {
		width: 100%;
		padding-left: 0;
		padding-right: 0;
	}
`;

const Label = styled.label`
	font-size: 16px;
	font-weight: 300;
	padding-bottom: 5px;
`;

const Input = styled.input`
	border: 1px solid #e0ddd7;
	width: 100%;
	font-size: 16px;
	font-weight: 300;
	padding: 10px;
	outline: none;
	height: 42px;
`;

const Select = styled.select`
	font-size: 16px;
	font-weight: 300;
	border: 1px solid #e0ddd7;
	outline: none;
	padding: 10px;
	height: 42px;
`;

const TextArea = styled.textarea`
	resize: none;
	border: 1px solid #e0ddd7;
	outline: none;
	padding: 10px;
	font-size: 16px;
	font-weight: 300;
`;

const ErrorText = styled.span`
	font-size: 14px;
	font-weight: 300;
	color: red;
	padding-top: 3px;
`;

const FormText = styled.span`
	font-size: 12px;
	font-weight: 300;
	margin: 10px 0;
`;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const timeMap = {
	3: {
		openTime: 10,
		closeTime: 19,
	},
	4: {
		openTime: 10,
		closeTime: 19,
	},
	5: {
		openTime: 9,
		closeTime: 15,
	},
	6: {
		openTime: 9,
		closeTime: 14,
	},
};

const returnHour = time => {
	return parseInt(time.split(':')[0]);
};

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
	appointment_request_date: yup
		.string()
		.test('invalid-day', '*Please pick another day', value => {
			const day = moment(value).day();

			if (day === 0 || day === 1 || day === 2) {
				return false;
			}

			return true;
		})
		.required('*Required field'),
	appointment_request_time: yup
		.string()
		.test('invalid-time', '*Please pick another time', function (value) {
			// const day = moment(yup.ref('appointment_request_date')).day();
			const dayRef = this.resolve(yup.ref('appointment_request_date'));
			const day = moment(dayRef).day();

			if (day === 0 || day === 1 || day === 2) {
				return false;
			}

			if (
				returnHour(value) >= timeMap[day].openTime &&
				returnHour(value) <= timeMap[day].closeTime
			) {
				return true;
			}

			return false;
		})
		.required('*Required field'),
	appointment_request_service: yup.string().required('*Required field'),
	message: yup.string().required('*Required field'),
});

const AppointmentForm = () => {
	const [successMessage, setSuccessMessage] = useState('');
	const { register, handleSubmit, errors, reset } = useForm({
		resolver: yupResolver(schema),
	});
	const formId = '6336fa11-d394-4327-9735-6dfe287c716c';
	const context = {
		pageUri: 'https://jesserhodes.style/booking/appointment',
		pageName: 'Appointment Request',
	};

	const onSubmit = data => {
		data['appointment_request_time'] = moment(
			data['appointment_request_time'],
			'HH:mm'
		).format('h:mm A');

		const formData = { ...data, appointment_request_status: 'pending' };

		submitFormData(formData, formId, context);
		reset();
		setSuccessMessage(
			'Thank you for your appointment request. Please note this request is not a confirmed appointment. I will review your submission and be in to confirm within 48 hours.'
		);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			{successMessage && <FormSuccess message={successMessage} />}
			<InputGroup width="50%" marginRight="10px">
				<Label>First Name</Label>
				<Input type="text" name="firstname" ref={register} />
				{errors.firstname && (
					<ErrorText>{errors.firstname.message}</ErrorText>
				)}
			</InputGroup>
			<InputGroup width="50%" marginLeft="10px">
				<Label>Last Name</Label>
				<Input type="text" name="lastname" ref={register} />
				{errors.lastname && (
					<ErrorText>{errors.lastname.message}</ErrorText>
				)}
			</InputGroup>
			<InputGroup width="50%" marginRight="10px">
				<Label>Email</Label>
				<Input type="email" name="email" ref={register} />
				{errors.email && <ErrorText>{errors.email.message}</ErrorText>}
			</InputGroup>
			<InputGroup width="50%" marginLeft="10px">
				<Label>Phone Number</Label>
				<Input type="tel" name="phone" ref={register} />
				{errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
			</InputGroup>
			<InputGroup width="33.33%" marginRight="10px">
				<Label>Date</Label>
				<Input
					type="date"
					name="appointment_request_date"
					ref={register}
				/>
				{errors.appointment_request_date && (
					<ErrorText>
						{errors.appointment_request_date.message}
					</ErrorText>
				)}
			</InputGroup>
			<InputGroup width="33.33%" marginRight="10px" marginLeft="10px">
				<Label>Time</Label>
				<Input
					type="time"
					name="appointment_request_time"
					ref={register}
				/>
				{errors.appointment_request_time && (
					<ErrorText>
						{errors.appointment_request_time.message}
					</ErrorText>
				)}
			</InputGroup>
			<InputGroup width="33.33%" marginLeft="10px">
				<Label>Service</Label>
				<Select
					name="appointment_request_service"
					ref={register({ required: true })}
				>
					<option defaultValue></option>
					<option value="color">Color</option>
					<option value="haircut">Haircut</option>
					<option value="extensions">Extensions</option>
				</Select>
				{errors.appointment_request_service && (
					<ErrorText>
						{errors.appointment_request_service.message}
					</ErrorText>
				)}
			</InputGroup>
			<InputGroup>
				<Label>Message</Label>
				<TextArea name="message" rows="8" ref={register} />
				{errors.message && (
					<ErrorText>{errors.message.message}</ErrorText>
				)}
			</InputGroup>
			<InputGroup>
				<FormText>
					<em>
						*Submitting this form does not guarantee an appointment
						with the date and time requested. All appointments have
						to be confirmed by Jesse Rhodes.
					</em>
				</FormText>
				<FormText>
					<em>
						*Jesse Rhodes needs the contact information you provide
						to her to contact you about the products and services
						offered. You may unsubscribe from these communications
						at any time.
					</em>
				</FormText>
			</InputGroup>
			<InputGroup>
				<Button margin="0 auto" width="250px">
					Submit
				</Button>
			</InputGroup>
		</Form>
	);
};

export default AppointmentForm;
