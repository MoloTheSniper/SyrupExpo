import { Tabs } from 'expo-router';
import {StatusBar } from 'expo-status-bar'
import { StyleSheet,Text, View } from 'react-native';

export default function TabLayout() {
  
  return (
<View style = {styles.container}>
    <Text>Syrup</Text>
    <StatusBar style = "auto"></StatusBar>
</View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  }
})
