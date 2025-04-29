import { AppProps } from 'next/app';
import './unistyles'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
