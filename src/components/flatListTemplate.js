import React, {useEffect, useState} from 'react';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles/mainScreenStyles';

export default function FlatListTemplate(props) {
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    setSearchText(props.name);
  }, [props.name]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={props.type}
      contentContainerStyle={styles.allEmojisList}
      keyExtractor={item => item.description}
      renderItem={({item}) => {
        if (item.aliases[0].includes(searchText))
          return (
            <View>
              <TouchableOpacity
                key={item.description}
                onPress={() =>
                  props.setText(prevstate => prevstate + item.emoji)
                }>
                <Text style={styles.emojis}> {item.emoji}</Text>
              </TouchableOpacity>
            </View>
          );
      }}
      numColumns={6}
    />
  );
}
