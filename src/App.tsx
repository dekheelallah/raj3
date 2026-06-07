import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { DeliveryRequestPage } from './pages/DeliveryRequestPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PricingPage } from './pages/PricingPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { ProjectStatusPage } from './pages/ProjectStatusPage'
import { RegisterPage } from './pages/RegisterPage'
import { SupportPage } from './pages/SupportPage'
import { TermsPage } from './pages/TermsPage'
import { TrackOrderPage } from './pages/TrackOrderPage'
import { UserTypePage } from './pages/UserTypePage'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-type" element={<UserTypePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/delivery-request" element={<DeliveryRequestPage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/project-status" element={<ProjectStatusPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App