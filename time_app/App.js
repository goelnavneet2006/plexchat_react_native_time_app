import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {

    const currentTime = new Date();
    let isPMOrAM = "AM";
    let hours = currentTime.getHours();
    if (currentTime.getHours() >= 12) {
      hours = currentTime.getHours() - 12;
      isPMOrAM = "PM";
    }
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    return (
      <View style={styles.container}>
        <Text>Current time:</Text>
        <Text>{hours}hh:{minutes}mm:{seconds}ss {isPMOrAM}</Text>
      </View>
    );
  }

  componentDidMount() {
    const that = this;
    const intervalId = setInterval(function () {
      that.forceUpdate();
    }, 1000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
