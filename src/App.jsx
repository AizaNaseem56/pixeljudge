import { Routes, Route } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Analyze from './pages/Analyze'
import Report from './pages/Report'
import ComingSoon from './pages/ComingSoon'

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/reports/:reportId" element={<Report />} />
        <Route path="/reports/:reportId/redesign" element={<ComingSoon title="Redesign Preview" />} />
        <Route path="/history" element={<ComingSoon title="Report History" />} />
      </Route>
    </Routes>
  )
}

export default App