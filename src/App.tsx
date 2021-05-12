import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
      <GlobalStyle />
    </>
  );
}
