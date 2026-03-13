import { createBrowserRouter } from 'react-router-dom'
import { LandingPage } from '../sections/LandingPage'
import { TermsPage } from '../sections/TermsPage'
import { PrivacyPage } from '../sections/PrivacyPage'
import { CookiesPage } from '../sections/CookiesPage'

function getRouterBasename() {
  const configuredBase = import.meta.env.VITE_BASE_PATH

  if (configuredBase) {
    return configuredBase
  }

  if (!import.meta.env.PROD || !window.location.hostname.endsWith('github.io')) {
    return '/'
  }

  const [repoSegment] = window.location.pathname.split('/').filter(Boolean)
  return repoSegment ? `/${repoSegment}/` : '/'
}

const routerBasename = getRouterBasename()

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
  basename: routerBasename,
})
