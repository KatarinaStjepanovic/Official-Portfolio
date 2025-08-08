import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from './routes/MainPage'
import MyWork from './routes/MyWork'
import Contact from './routes/Contact'
import AboutMe from './routes/AboutMe'
import Loading from './components/Loading'




class App extends React.Component {
  constructor() {
    super()
   
    this.state = {
      loading: false,

    }

    this.loadingAnim = this.loadingAnim.bind(this)
    this.router = createBrowserRouter([
  { path: "/", element: < MainPage loadingAnim={this.loadingAnim} /> },
  { path: "/myWork", element: < MyWork loadingAnim={this.loadingAnim} /> },
  { path: "/contact", element: < Contact loadingAnim={this.loadingAnim} /> },
  { path: "/aboutMe", element: < AboutMe loadingAnim={this.loadingAnim} /> }
]
)
  }

  loadingAnim() {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })

    }, 2500)
  }

  render() {
    return (
      this.state.loading ? < Loading /> :
        < RouterProvider router={this.router} />
    )
  }
}

export default App