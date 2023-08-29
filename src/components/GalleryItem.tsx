import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  findNodeHandle,
} from 'react-native';

const GalleryItem = ({
  title,
  screens,
  hasTVPreferredFocus,
  blockFocusRight,
  key1
}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const navigation = useNavigation();
  const touchableHighlightRef = useRef(null);
  const onRef = useCallback(ref => {
    if (ref) {
      touchableHighlightRef.current = ref;
    }
  }, []);

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      onPress={() => {
        navigation.navigate('NotionView', { screens });
      }}
      hasTVPreferredFocus={hasTVPreferredFocus}
      style={[styles.wrapper, focus ? styles.wrapperFocused : null]}
      ref={onRef}
      nextFocusRight={
        blockFocusRight ? findNodeHandle(touchableHighlightRef.current) : null
      }>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    height: 42
  },
  wrapperFocused: {
    borderColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GalleryItem;
