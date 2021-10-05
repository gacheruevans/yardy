/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

 import Colors from '../assets/styles/Colors';
 import type {Node} from 'react';
 import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
 import {
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 import React, {Fragment} from 'react';
 
 const links = [
   {
     id: 1,
     title: 'Land Scaping',
     link: 'https://reactnative.dev/docs/tutorial',
     description: 'Explains a Hello World for React Native.',
   },
   {
     id: 2,
     title: 'Style',
     link: 'https://reactnative.dev/docs/style',
     description:
       'Covers how to use the prop named style which controls the visuals.',
   },
   {
     id: 3,
     title: 'Layout',
     link: 'https://reactnative.dev/docs/flexbox',
     description: 'React Native uses flexbox for layout, learn how it works.',
   },
   {
     id: 4,
     title: 'Components',
     link: 'https://reactnative.dev/docs/components-and-apis',
     description: 'The full list of components and APIs inside React Native.',
   },
 ];
 
 const ListGallery = (): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.container}>
       {links.map(({id, title, link, description}) => (
         <Fragment key={id}>
           <View
             style={[
               styles.separator,
               {
                 backgroundColor: isDarkMode ? Colors.dark : Colors.light,
               },
             ]}
           />
           <TouchableOpacity
             accessibilityRole="button"
             onPress={() => openURLInBrowser(link)}
             style={styles.linkContainer}>
             
             <Text
               style={[
                 styles.description,
                 {
                   color: isDarkMode ? Colors.lighter : Colors.dark,
                 },
               ]}>
               {description}
             </Text>
           </TouchableOpacity>
         </Fragment>
       ))}
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   linkContainer: {
     flexWrap: 'wrap',
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingVertical: 8,
   },
   link: {
     flex: 2,
     fontSize: 18,
     fontWeight: '400',
     color: Colors.primary,
   },
   description: {
     flex: 3,
     paddingVertical: 16,
     fontWeight: '400',
     fontSize: 18,
   },
   separator: {
     height: StyleSheet.hairlineWidth,
   },
 });
 
 export default ListGallery;
 