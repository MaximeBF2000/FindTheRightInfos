import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Navbar, Login, Home, Search, Pricing, Contact, Footer, Course, MyCourses } from "./components"
import { AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"

function App() {
  const user = useSelector(state => state.user)

	return (
		<BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="*">
          <Navbar />
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/course/:courseId" component={Course} />
              <Route exact path="/mycourses" component={MyCourses} />
            </Switch>
          </AnimatePresence>
          <Footer />
        </Route>
      </Switch>
		</BrowserRouter>
	)
}

export default App
