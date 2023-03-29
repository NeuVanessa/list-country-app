import { StyleSheet, View, Animated, NativeModules, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useRef } from 'react'
import { Container } from 'src/styles/basic'
import { StackActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { changeLanguage } from 'src/locales/i18n'

export const Intro = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const checkLanguage = async () => {
      const getIfLanguageExists = await AsyncStorage.getItem('lng')
      if (getIfLanguageExists) {
        changeLanguage(getIfLanguageExists)
      } else {
        changeLanguage(NativeModules.I18nManager.localeIdentifier.split('_')[0])
      }
    }
    checkLanguage()
  }, [])

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start()
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'))
      navigation.navigate('Login')
    }, 2000)
  }, [fadeAnim])

  return (
    <Container>
      <LinearGradient style={styles.background} colors={['#3B4781', '#232A4A']}>
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ scale: fadeAnim }],
          }}
        >
          <View>
          <Text>FILTERING COUNTRIES</Text>
          </View>
        </Animated.View>
      </LinearGradient>
    </Container>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
