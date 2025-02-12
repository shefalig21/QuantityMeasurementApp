import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';

const Temperature = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Celsius');
  const [toUnit, setToUnit] = useState('Fahrenheit');
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');

  const handleConvert = () => {
    const value = parseFloat(fromValue);
    if (isNaN(value) || fromValue === '') {
      setError('Invalid input');
      setShowResult(false);
      return;
    }
    const convertedValue = convertTemperature(value, fromUnit, toUnit);
    setToValue(convertedValue);
    setShowResult(true);
    setError('');
  };

  const handleReset = () => {
    setFromValue('');
    setToValue('');
    setShowResult(false);
    setError('');
  };

  const convertTemperature = (value, from, to) => {
    if (from === to) return value;

    if (from === 'Celsius' && to === 'Fahrenheit') return (value * 9/5) + 32;
    if (from === 'Fahrenheit' && to === 'Celsius') return (value - 32) * 5/9;
    if (from === 'Celsius' && to === 'Kelvin') return value + 273.15;
    if (from === 'Kelvin' && to === 'Celsius') return value - 273.15;
    if (from === 'Fahrenheit' && to === 'Kelvin') return (value - 32) * 5/9 + 273.15;
    if (from === 'Kelvin' && to === 'Fahrenheit') return (value - 273.15) * 9/5 + 32;
    return value;
  };

  return (
    <LinearGradient
      colors={['#ffcccb', '#ffffff']}
      style={styles.outerContainer}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Temperature Conversion</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter value"
          value={fromValue}
          onChangeText={setFromValue}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Text style={styles.label}>From</Text>
        <Picker
          selectedValue={fromUnit}
          style={styles.picker}
          onValueChange={(itemValue) => setFromUnit(itemValue)}
        >
          <Picker.Item label="Celsius" value="Celsius" />
          <Picker.Item label="Fahrenheit" value="Fahrenheit" />
          <Picker.Item label="Kelvin" value="Kelvin" />
        </Picker>
        <Text style={styles.label}>To</Text>
        <Picker
          selectedValue={toUnit}
          style={styles.picker}
          onValueChange={(itemValue) => setToUnit(itemValue)}
        >
          <Picker.Item label="Celsius" value="Celsius" />
          <Picker.Item label="Fahrenheit" value="Fahrenheit" />
          <Picker.Item label="Kelvin" value="Kelvin" />
        </Picker>
        <TouchableOpacity style={styles.button} onPress={handleConvert}>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableOpacity>
        {showResult && (
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>
              {toValue} {toUnit}
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 12,
    shadowColor: 'purple',
    shadowRadius: 20,
    elevation: 20,
    width: '80%',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 22,
    fontWeight: 'bold',
    fontFamily:'serif',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6a0dad',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button1: {
    marginBottom: 25,
    backgroundColor: '#DBEFC2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Temperature;

