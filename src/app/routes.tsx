import { createBrowserRouter } from 'react-router-dom'
import { LandingPage } from '../sections/LandingPage'
import { TermsPage } from '../sections/TermsPage'
import { PrivacyPage } from '../sections/PrivacyPage'
import { CookiesPage } from '../sections/CookiesPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/terminos',
    element: <TermsPage />,
  },
  {
    path: '/privacidad',
    element: <PrivacyPage />,
  },
  {
    path: '/cookies',
    element: <CookiesPage />,
  },
], {
  basename: import.meta.env.BASE_URL,
})
