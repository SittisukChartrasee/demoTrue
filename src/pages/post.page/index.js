import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Item} from '../../components';
import styles from './index.styles';

export default ({navigation}) => {
  const [dataA, SetdataA] = React.useState([]);
  const [count, SetCount] = React.useState(4);
  const getApi = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await result.json();

    const data = [];
    json.forEach(async (d) => {
      const resultB = await fetch('https://randomuser.me/api/');
      const jsonB = await resultB.json();

      data.push({
        ...d,
        ...{
          image: jsonB.results[0].picture.large,
          email: jsonB.results[0].email,
          name: jsonB.results[0].name.first + ' ' + jsonB.results[0].name.last,
        },
      });
      SetdataA(data);
    });
  };

  React.useEffect(() => {
    getApi();
  }, []);

  const onNext = (item) => {
    console.log(item);
    navigation.navigate('Comment', {
      itemId: item.id,
      title: item?.title,
      body: item?.body,
    });
  };

  const onLoadMore = () => {
    if (count > dataA.length) {
      alert('โหลดหมดแล้วครับ');
      SetCount(count);
    }
    SetCount((pre) => pre + 4);
  };

  return (
    <View style={styles.Container}>
      <FlatList
        data={dataA.slice(0, count)}
        renderItem={(val) => Item(onNext)(val)}
        keyExtractor={(d) => d.id.toString()}
      />
      <TouchableOpacity onPress={onLoadMore} style={styles.buttonLoadMore}>
        <Text style={styles.text}>Load more </Text>
      </TouchableOpacity>
    </View>
  );
};
