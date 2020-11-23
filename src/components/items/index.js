import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './index.styles';

const Item = (onNext) => ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.groupHeader}>
        <Image source={{uri: item?.image}} style={styles.itemImage} />
        <View style={styles.groupHeaderTitle}>
          <Text>{item?.name}</Text>
          <Text style={styles.groupHeaderEmail}>{item?.email}</Text>
        </View>
      </View>

      <View style={styles.groupBody}>
        <TouchableOpacity onPress={() => onNext(item)}>
          <Text style={styles.groupBodyTitle}>{item?.title}</Text>
        </TouchableOpacity>
        <Text>{item?.body}</Text>
      </View>

      <TouchableOpacity
        style={styles.itemButtonDetail}
        onPress={() => onNext(item)}>
        <Text style={styles.groupButtonTitle}>SHOW DETAIL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
