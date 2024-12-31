import Header from '@/Components/Header';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export const unstable_settings = {
  initialRouteName: 'index'
}
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ header: () => <Header /> }} />
    </Stack>
  );
}
