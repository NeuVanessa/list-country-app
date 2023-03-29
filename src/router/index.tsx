import React, { useContext } from 'react'
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import 'src/locales/i18n'
import { Home, Intro } from 'src/screens'
import Login from 'src/screens/login'
import Footer from 'src/components/footer'
import { RouterContext } from 'App'
import DetailCountry from 'src/screens/detail-country'

const Stack = createStackNavigator()
export const navigationRef = createNavigationContainerRef()

const transtionAndroid = {
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
}

const transtionOther = {
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
}

export const Routes = () => {
  const { routeName, setRouteName } = useContext(RouterContext)

  const AllowedFooters = () => {
    const alloweds = ['Home']
    for (const routes of alloweds) {
      if (routes === routeName) return <Footer route={routeName} />
    }
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setRouteName(navigationRef.getCurrentRoute().name)
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.getCurrentRoute().name
        setRouteName(currentRouteName)
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName="Intro"
      >
        <Stack.Screen
          options={transtionAndroid}
          name="Intro"
          component={Intro}
        />

        <Stack.Screen options={transtionOther} name="Login" component={Login} />
        <Stack.Screen options={transtionOther} name="DetailCountry" component={DetailCountry} /> 
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      <AllowedFooters />
    </NavigationContainer>
  )
}
