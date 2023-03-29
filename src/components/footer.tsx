

import {  StyleSheet } from 'react-native'

import React, { memo } from 'react'

import styled from 'styled-components/native'



import { Icon } from "react-native-elements";
const FooterStyled = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 24px;
  width: 100%;
  background-color: #fff;
  height: 80px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`
const IconButton = styled.Pressable`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 37px;
  height: 50px;
`
const IconText = styled.Text`
  color: #616161;
  font-size: 12px;
  width: 40px;
  text-align: center;
`
const Footer = ({ route }) => {

  return (
    <FooterStyled style={styles.footerShadow}>
      <IconButton >
        {route === 'Home' ? <Icon type="font-awesome" name="home" color={"white"} /> :  <Icon type="font-awesome" name="home" color={"white"} />}
        <IconText
          style={{
            color: `${route === 'Home' ? '#566FD7' : '#616161'}`,
            fontFamily: `${route === 'Home' ? 'Poppins' : 'PoppinsLight'}`,
          }}
        >
        goot
        </IconText>
      </IconButton>
    </FooterStyled>
  )
}

export default memo(Footer)

const styles = StyleSheet.create({
  footerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
})
