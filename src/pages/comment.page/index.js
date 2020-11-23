import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {ItemComment} from '../../components';
import styles from './index.styles';

export default ({route}) => {
  const [dataA, SetdataA] = React.useState([]);
  const [dataB, SetdataB] = React.useState([]);
  const itemId = route?.params?.itemId;
  const title = route?.params?.title;
  const body = route?.params?.body;
  const getApi = async () => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${itemId | 1}/comments`,
    );
    const json = await result.json();

    const data = [];
    json.forEach(async (d) => {
      const resultB = await fetch('https://randomuser.me/api/');
      const jsonB = await resultB.json();

      data.push({...d, image: jsonB.results[0].picture.large});
      console.log(d, jsonB);
      SetdataA(data);
    });
  };

  React.useEffect(() => {
    getApi();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.groupHeader}>
        <View style={styles.groupHeaderTitle}>
          <Text style={styles.groupTitle}>{title}</Text>
          <Text>{body}</Text>
        </View>
        <Text style={styles.groupCountComment}>Comment {dataA?.length}</Text>
      </View>

      <FlatList
        data={dataA}
        renderItem={ItemComment}
        keyExtractor={(d) => d.id.toString()}
      />
    </View>
  );
};
