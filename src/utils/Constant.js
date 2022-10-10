import {Animated} from 'react-native'


let AnimatedHeaderValue = new Animated.Value(0);
const diffClamp = Animated.diffClamp(AnimatedHeaderValue,0,80)
const Header_Max_Height = 80;
const Header_Min_Height = 0;

const animateHeaderHeight = diffClamp.interpolate({
    inputRange:[0,80 - 0],
    outputRange:[Header_Max_Height,Header_Min_Height],
    extrapolate:"clamp"
});

export {AnimatedHeaderValue,animateHeaderHeight,Header_Max_Height,Header_Min_Height}