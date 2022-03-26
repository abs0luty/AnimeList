import React from 'react'
import { Button, Form, Input, notification, Typography } from 'antd'

import styles from './styles.module.scss'
import { DefaultLayout } from 'layouts/DefaultLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/useAppSelector'
import { forgotPasswordThunk } from '../../store/reducers/landingReducer/landingThunks'

export const RestorePassword: React.FC = () => {
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const forgotPasswordError = useAppSelector(
		state => state.landing.forgotPasswordError
	)

	const onFinish = (values: any) => {
		const user = {
			login: values.name,
			email: values.email,
			password: values.password
		}
		dispatch(forgotPasswordThunk(user))

		setTimeout(() => {
			if (forgotPasswordError === 'success') {
				notification.success({
					placement: 'top',
					message: 'Успешно!',
					description: 'Вы успешно восстановили пароль!',
					duration: 1
				})
				return navigate('/login')
			}
			if (forgotPasswordError) {
				notification.error({
					placement: 'top',
					message: 'Ошибка!',
					description: 'Проверьте введённые данные',
					duration: 1.5
				})
			}
		}, 400)
	}

	return (
		<DefaultLayout>
			<Form
				name='basic'
				onFinish={onFinish}
				autoComplete='off'
				style={{ width: '100%' }}
			>
				<Typography.Title level={4} style={{ color: 'white' }}>
					Восстановление пароля
				</Typography.Title>
				<Form.Item
					name='name'
					rules={[
						{
							required: true,
							message: 'Пожалуйста, введите свой ник!'
						}
					]}
					style={{ margin: '0 0 10px 0' }}
				>
					<Input placeholder='Никнейм' />
				</Form.Item>
				<Form.Item
					name='email'
					rules={[
						{
							required: true,
							message: 'Пожалуйста, введите свою электронную почту!'
						}
					]}
					style={{ margin: '0 0 10px 0' }}
				>
					<Input placeholder='Электронная почта' />
				</Form.Item>
				<Form.Item
					name='password'
					rules={[
						{ required: true, message: 'Пожалуйста, введите свой пароль!' }
					]}
				>
					<Input.Password placeholder='Пароль' />
				</Form.Item>
				<div className={styles.loginOrRegistration}>
					<Link to='/registration'>Регистрация</Link>
					<Link to='/login'>Логин</Link>
				</div>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Восстановить
					</Button>
				</Form.Item>
			</Form>
		</DefaultLayout>
	)
}
