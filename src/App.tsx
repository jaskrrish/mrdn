/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Platform from './pages/Platform';
import Systems from './pages/Systems';
import Intelligence from './pages/Intelligence';
import Mission from './pages/Mission';
import Contact from './pages/Contact';
import Helix from './pages/systems/Helix';
import Aegis from './pages/systems/Aegis';
import Orion from './pages/systems/Orion';
import Nexus from './pages/systems/Nexus';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Platform />} />
          <Route path="systems" element={<Systems />} />
          <Route path="systems/helix" element={<Helix />} />
          <Route path="systems/aegis" element={<Aegis />} />
          <Route path="systems/orion" element={<Orion />} />
          <Route path="systems/nexus" element={<Nexus />} />
          <Route path="intelligence" element={<Intelligence />} />
          <Route path="mission" element={<Mission />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
