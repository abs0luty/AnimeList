import React from 'react'
import { Button, Form, Input, Typography, notification } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import styles from './styles.module.scss'
import { DefaultLayout } from 'layouts/DefaultLayout'
import { loginThunk } from '../../store/reducers/landingReducer/landingThunks'
import { useAppSelector } from '../../hooks/useAppSelector'

export const Login: React.FC = () => {
	const dispatch = useDispatch()
	const authError = useAppSelector(state => state.landing.authError)

	const onFinish = (values: any) => {
		dispatch(loginThunk(values))

		if (authError) {
			notification.error({
				placement: 'top',
				message: 'Ошибка!',
				description: 'Проверьте введённые данные',
				duration: 1.5
			})
		}
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
					Вход
				</Typography.Title>
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
				<div className={styles.registrationOrRestorePassword}>
					<Link to='/registration'>Регистрация</Link>
					<Link to='/restore-password'>Забыли пароль?</Link>
				</div>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Войти
					</Button>
				</Form.Item>
			</Form>
		</DefaultLayout>
	)
}