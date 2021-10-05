/**
 * Author Evans Gacheru Munene (c) and its affiliates.
 *
 * @flow strict-local
 * @format
 */

 import Colors from '../assets/styles/Colors';
 import * as React from 'react';
 import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
 import {
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
   SafeAreaView,
 } from 'react-native';
 import Carousel, { Pagination } from 'react-native-snap-carousel';

 export default class ProfessionalCarousel extends React.Component {
    // const isDarkMode = useColorScheme() === 'dark';
    constructor(props) {
        super(props);
        this.state = {
            activeSlide:0,
            labourers: [
                {
                    id: 1,
                    title: 'Plumber',
                },
                {
                    id: 2,
                    title: 'Gardener',
                },
                {
                    id: 3,
                    title: 'Florist',
                },
                {
                    id: 4,
                    title: 'Agronomist',
                },
                {
                    id: 4,
                    title: 'Agronomist',
                },
                {
                    id: 4,
                    title: 'Agronomist',
                },
            ]
        }
    }
    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'gray',
              borderRadius: 100,
              height: 100,
              width: 100,
              padding: 20,
              marginLeft: 130,
              marginRight: 0,}}>
            <Text style={{fontSize: 12, color: `white`}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }
    get pagination() {
        const { labourers, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={labourers.length}
                activeDotIndex={activeSlide}
                containerStyle={{ 
                    backgroundColor: 'transparent',
                    marginLeft: 120,
                    width: 100,
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                    backgroundColor: 'gray'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, paddingTop: 20, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.labourers}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
            {this.pagination}
          </SafeAreaView>
        );
    }
 };

