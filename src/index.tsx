import { View, StyleSheet, TextInput, type ViewStyle, } from 'react-native'
import React, { useRef, useState } from 'react'

type OTPInputProps = {
  length: number,
  value: string[],
  disabled?: boolean,
  onChange: (value: string[]) => void
  inputStyle?: ViewStyle
  containerStyle?: ViewStyle
}

const OTPInput = (props: OTPInputProps) => {
  const { length, value, disabled, onChange, inputStyle, containerStyle } = props;
  const inputRefs = useRef<Array<TextInput>>([])
  const [inputCode, setInputCode] = useState<string[]>(value)

  return (
    <View style={containerStyle || defaultStyle.container}>
      {[...new Array(length)].map((_, index) => (
        <TextInput
          ref={(el => inputRefs.current.push(el as TextInput))}
          key={index}
          style={inputStyle || defaultStyle.input}
          value={inputCode[index]}
          inputMode='numeric'
          maxLength={6}
          selectTextOnFocus
          editable={!disabled}
          testID={`OTPInput-${index}`}
          onChange={(e) => {
            const text = e.nativeEvent.text;
            if (text.length === 6) {
              const codeArr = text.split("")
              codeArr.forEach((code, idx) => {
                const input = inputRefs.current[idx]
                if (input) {
                  input.setNativeProps({
                    text: code
                  })
                }
              })

              setInputCode(text.split(""))
              onChange(text.split(""))
              return
            }

            const newValue = inputCode
            newValue[index] = text
            setInputCode([...newValue])
            onChange(newValue)

            if (text.length === 1) {
              const nextInput = inputRefs.current[index + 1]
              if (nextInput) {
                nextInput.focus()
              }
            }
          }}
          onKeyPress={event => {

            if (event.nativeEvent.key === 'Backspace') {
              if (inputCode[index]) {
                const newValue = inputCode
                newValue[index] = ""
                setInputCode([...newValue])
                onChange(newValue)
                return
              }

              const prevInput = inputRefs.current[index - 1]
              if (prevInput) {
                prevInput.focus()
                return
              }
            }
          }}
          textContentType='oneTimeCode'
        />
      ))}
    </View>
  )
}

export default OTPInput

const defaultStyle = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5
  },
  input: {
    fontSize: 24,
    textAlign: "center",
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
    color: "black",
    aspectRatio: 1 / 1,
  }
})
