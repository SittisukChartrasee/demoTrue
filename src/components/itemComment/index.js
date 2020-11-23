import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './index.styles';

const Item = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.groupHeader}>
        <Image source={{uri: item.image}} style={styles.itemImage} />
        <View style={styles.groupHeaderTitle}>
          <Text style={{fontSize: 20}}>{item?.name}</Text>
          <Text style={styles.groupHeaderEmail}>{item?.email}</Text>
        </View>
      </View>
      <Text>{item?.body}</Text>
    </View>
  );
};

export default Item;
