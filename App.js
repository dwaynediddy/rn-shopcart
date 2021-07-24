import React, { useEffect } from 'react'

import {
  Text,
  View,
} from 'react-native'

import RNBootSplash from "react-native-bootsplash"

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  });
  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Shopping cart App</Text>
        </View>

  )
}

export default App;
