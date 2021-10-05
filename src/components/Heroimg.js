/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

 import type {Node} from 'react';
 import {ImageBackground, StyleSheet, Text, useColorScheme} from 'react-native';
 import React from 'react';
 import Colors from '../assets/styles/Colors';
 import Logo from '../assets/img/yardy_logo_final.png';

 const Heroimg = (): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <ImageBackground
       accessibilityRole="image"
       source={Logo}
       style={[
         styles.background,
         {
           backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
         },
       ]}
       imageStyle={styles.logo}>
       <Text
         style={[
           styles.text,
           {
             color: Colors.darker,
             textShadowColor: Colors.gray,
           },
         ]}>
         Welcome to Yardy!
       </Text>
     </ImageBackground>
   );
 };
 
 const styles = StyleSheet.create({
   background: {
     paddingBottom: 40,
     paddingTop: 96,
     paddingHorizontal: 32,
   },
   logo: {
     overflow: 'visible',
     resizeMode: 'cover',
     width: 80,
     height: 80,
     /*
      * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
      *
      * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
      * source image's size.
      */
     marginLeft: 170,
     marginTop: 40,
   },
   text: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: '700',
    fontFamily:'Eina 03',
    letterSpacing: -0.16,
    textAlign: 'center',
    textShadowOffset: {width: 0.5, height: 1},
    textShadowRadius: 0.5,
   
   },
 });
 
 export default Heroimg;
 