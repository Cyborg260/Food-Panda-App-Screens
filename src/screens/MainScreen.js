import { View, Text, StyleSheet, StatusBar, ScrollView, Animated ,SafeAreaView} from 'react-native'
import React from 'react'
import SearchView from './SearchView'
import TopView from './TopView'
import ItemsScreen from './ItemsScreen'
import DrawerStack from '../navigations/DrawerStack'
import {AnimatedHeaderValue} from '../utils/Constant'

const MainScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor="deeppink"
            />
            <TopView />
            <SearchView />
            <ScrollView
            // style={{flex:1}}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
                {useNativeDriver:false}
            )}
            
            >
            <ItemsScreen/>  
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
    },
    itemsView: {
        backgroundColor: "grey",
    }
})
export default MainScreen;