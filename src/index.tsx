import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './container/App/App'
import { BrowserRouter } from 'react-router-dom'
// import { store } from "redux/store";
// import { Provider } from "react-redux";
// import ScrollToTop from "./ScrollToTop"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <Provider store={store}> */}
            {/* <ScrollToTop/> */}
            <App />
            {/* </Provider> */}
        </BrowserRouter>
    </React.StrictMode>
)
