// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
const stripePromise = loadStripe(
  "pk_test_51Qk7haGBgYzUsjKnbS6PnOlRZXO9lHYdUtviN4hfZl5eJEoGwbebEd6uOJDkXzqj8FAmtZ3BPxXtzA7Yfbw6wEGE00eEEavRBH"
);

import { loadStripe } from '@stripe/stripe-js'

createRoot(document.getElementById('root')).render(
  <Elements stripe={stripePromise} >
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </Elements>
)
