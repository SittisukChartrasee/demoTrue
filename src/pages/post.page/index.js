import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {Item} from '../../components';
import styles from './index.styles';

export default ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [count, SetCount] = React.useState(0);

  const getApi = async (limit = 1) => {
    setLoading(true);
    const dataSet = [];
    const apiHolder = await fetch('https://jsonplaceholder.typicode.com/posts');
    const resHolder = await apiHolder.json();

    for (const [key, iterator] of resHolder.entries()) {
      const apiRandomUser = await fetch('https://randomuser.me/api/');
      const apiUsers = await apiRandomUser.json();
      dataSet.push({
        ...iterator,
        image: apiUsers.results[0].picture.large,
        email: apiUsers.results[0].email,
        name:
          apiUsers.results[0].name.first + ' ' + apiUsers.results[0].name.last,
      });
      if (key === limit - 1) {
        break;
      }
    }
    setLoading(false);
    setData(dataSet);
  };

  React.useEffect(() => {
    getApi(1);
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
    SetCount((pre) => {
      const number = pre + 2;
      getApi(number);
      return number;
    });
  };

  const onRefresh = () => {
    getApi(1);
  };

  return (
    <View style={styles.Container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        data={data}
        inverted
        renderItem={(val) => Item(onNext)(val)}
        keyExtractor={(d) => d.id.toString()}
        decelerationRate="fast"
      />
      <TouchableOpacity onPress={onLoadMore} style={styles.buttonLoadMore}>
        <Text style={styles.text}>Load more {data.length} </Text>
      </TouchableOpacity>
    </View>
  );
};
