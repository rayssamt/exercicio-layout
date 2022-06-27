import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Layout from './layout/layout';

export default function App() {
  return (
    <>
      <Layout />
      <StatusBar style="auto" />
    </>

  );
}
