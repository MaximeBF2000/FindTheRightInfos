import React from "react"

function Button({ className, background, rounded, secondary, onClick, big, small, children }) {
	return (
		<div
			className={`button ${className}`}
			onClick={onClick}
			style={{
				backgroundColor: background || secondary ? "#D3D3D3" : "#ff5733",
				padding: big ? "1rem 2rem" : small ? ".3rem .8rem" : ".7rem 1.2rem",
        color: !secondary ? "#fefefe" : "unset",
        borderRadius: rounded === "full" ? "100px" : rounded ? ".25rem" : "0px"
			}}
		>
			{children}
		</div>
	)
}

export default Button
