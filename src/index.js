import "regenerator-runtime/runtime"
import React from "react"
import { render } from "react-dom"
import "./styles/app.scss"
import App from "./App"
import { createStore } from "redux"
import rootReducer from "./redux/rootReducer"
import { Provider } from "react-redux"

const store = createStore(rootReducer)


render(
	(
		<Provider store={store}>
			<App />
		</Provider>
	),
	document.querySelector("#root")
)
