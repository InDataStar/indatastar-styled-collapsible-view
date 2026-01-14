import { TouchableOpacity, View,StyleSheet,Text,Animated } from "react-native"
import type {TextStyle}  from "react-native"
import type {ViewStyle}  from "react-native"
import type {LayoutChangeEvent}  from "react-native"
import { useRef, useState } from "react";

export interface CollapsibleViewProps {
  title:string;
  children:React.ReactNode;
  defaultCollapsed?:boolean;
  containerStyle?:ViewStyle;
  titleStyle?:TextStyle;
  contentStyle?:ViewStyle;
}

const CollapsibleView:React.FC<CollapsibleViewProps> =({title,children,defaultCollapsed = true,titleStyle,containerStyle,contentStyle})=>{
  const [collapsed,setCollapsed] = useState(defaultCollapsed);
  const [contentHeight,setContentHeight] = useState(0);

  const animation = useRef(new Animated.Value(defaultCollapsed ?0:1)).current;

  const onContentLayout =(event:LayoutChangeEvent)=>{
    if(contentHeight ===0){
      setContentHeight(event.nativeEvent.layout.height)
    }
  }

  const heightInterpolation = animation.interpolate({
    inputRange:[0,1],
    outputRange:[0,contentHeight],
  })

  const toggle =()=>{
    Animated.timing(
      animation,{
        toValue:collapsed ? 1:0,
        duration:200,
        useNativeDriver:false
      }
    ).start();

    setCollapsed(!collapsed);
  }

  return(
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={toggle} activeOpacity={0.7}>
        <Text style={[styles.title, titleStyle]}>
          {title}
        </Text>
      </TouchableOpacity>

      <Animated.View style={{height:heightInterpolation, overflow:'hidden'}}>
        <View onLayout={onContentLayout} style={contentStyle}> 
          {children}
        </View>
      </Animated.View>
    </View>
  );
}

export default CollapsibleView


const styles = StyleSheet.create({
  container:{
    marginVertical:8
  },
  title:{
    fontSize:16,
    fontWeight:'600',
    paddingVertical:10,
  }
});
