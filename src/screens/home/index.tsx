import React, { useEffect, useState } from 'react'
import { InteractionManager } from 'react-native'


import { BusyIndicator, Container } from 'src/styles/basic'

export const Home = () => {
  const [ready, setReady] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setReady(true)
    })
  }, [])

  return (
    <Container>
     
    </Container>
  )
}
