import React, { useState } from "react"
import { Form } from "../index"
import { useToggle } from "../../utils/hooks"
import login_img from "../../assets/login_img.svg"
import { useHistory } from "react-router-dom"

function Login() {
	const history = useHistory()

	const [isSignin, toggleSignin] = useToggle(false)

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [repeatPassword, setRepeatPassword] = useState("")

	const login = () => {}

	const register = () => {}

	return (
		<div className="login">
			<Form
				onSubmit={isSignin ? register : login}
				className="box"
				title={`FindTheRightInfos - ${isSignin ? "Register" : "Login"}`}
			>
				<div className="logo" onClick={() => history.push("/")}>FTRI</div>
				{isSignin && (
					<Form.Input label="Name" value={name} setValue={setName} />
				)}
				<Form.Input
					label="Email"
					type="email"
					value={email}
					setValue={setEmail}
				/>
				<Form.Input
					label="Password"
					type="password"
					value={password}
					setValue={setPassword}
				/>
				{isSignin && (
					<Form.Input
						label="Repeat password"
						type="password"
						value={repeatPassword}
						setValue={setRepeatPassword}
					/>
				)}
				<Form.SubmitButton>{isSignin ? "Register" : "Login"}</Form.SubmitButton>
				<div className="switchForm">
					{isSignin ? "Already a member" : "Don't have an account yet"} ?{" "}
					<span onClick={toggleSignin}>
						{isSignin ? "Login" : "Register"} here
					</span>
				</div>
			</Form>
			<div className="login__image">
				<img
					src={login_img}
					alt="Woman on desk studying with computer and notes"
				/>
				<h1 className="login__image--title">
					Learning is important, use the correct tools
				</h1>
			</div>
		</div>
	)
}

export default Login
