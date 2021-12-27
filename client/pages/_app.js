import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { isDevelopment } from '../utils/misc';
import Header from '../components/Header';
import '../styles/globals.css';
import Footer from '../components/Footer';
import { ModalProvider } from '../hooks/useModal';
import Content from '../components/Content';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Content Component={Component} pageProps={pageProps} />
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
