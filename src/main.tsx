import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { MainPage } from './pages'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <StrictMode>
        <MainPage />
    </StrictMode>
)
