# react-native-otp

A React Native Otp input component.

## Installation

```sh
npm install react-native-otp
```

## Usage

```ts
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

```

## Props
| Name  | Required  | Type |  Description  |
|---|---|---|---|
| length | true | `number` |The number of input fields |
| value | true | `string[]` | The value from the inputs | 
| onChange | true | `(value:string[]) => void` | Call function to run on input change | 
| disabled | optional | `boolean` | Toggle between editable state of the input |
| inputStyle | optional | `ViewStyle` | The style object for the inputs | 
| containerStyle | optional | `ViewStyle` | The style object for the container | 

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT


