import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import OTPInput from 'react-native-otp';

export default function App() {
  const [code, setCode] = React.useState<string[]>([])

  return (
    <View style={styles.container}>
      <OTPInput length={6} value={code} onChange={(value) => setCode(value)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
