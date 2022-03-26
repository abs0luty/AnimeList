import React from 'react'
import { Button, Form, Input, Typography } from 'antd'

import styles from './styles.module.scss'
import { DefaultLayout } from 'Layouts/DefaultLayout'
import { Link } from 'react-router-dom'

export const Login: React.FC = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<DefaultLayout>
			<Form
				name='basic'
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
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
