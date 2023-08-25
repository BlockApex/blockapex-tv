import {StyleSheet, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import {useFocusEffect, useRoute} from '@react-navigation/native';

const NotionView = () => {
  const route = useRoute();
  const [uri, setUri] = useState('');

  let screens = [];

  useFocusEffect(() => {
    screens = route.params?.screens;
  });

  useEffect(() => {
    setUri(screens);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{
          uri,
        }}
        style={{width: '100%', height: '100%'}}
      />
    </SafeAreaView>
  );
};

export default NotionView;

const styles = StyleSheet.create({});
