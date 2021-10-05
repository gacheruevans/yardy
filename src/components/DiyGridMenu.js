// import type {Node} from 'react';

import React, { useState, useEffect } from 'react';
import Colors from '../assets/styles/Colors';
import { LogBox,SafeAreaView, StyleSheet, View, FlatList, Image, Text, useColorScheme } from 'react-native';

const DiyGridMenu = () => {
  const [dataSource, setDataSource] = useState([]);
  const getHeader = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {"DIY - [Do it yourself]"}
      </Text>
    </View>
    );
  };
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  useState(() => {
      let items = Array.apply(null, Array(6)).map((v, i) => {
        return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
      });
    setDataSource(items);
  }, []);
 
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', margin: 2 }}>
            <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={getHeader}
      />
    </SafeAreaView>
  );
};
export default DiyGridMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white'

  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily:'Eina 03',
    letterSpacing: -0.16,
    textAlign: 'center',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
