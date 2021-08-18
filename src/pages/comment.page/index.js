import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {ItemComment} from '../../components';
import styles from './index.styles';

export default ({route}) => {
  const [loading, setLoading] = React.useState(false);
  const [dataA, SetdataA] = React.useState([]);
  const itemId = route?.params?.itemId;
  const title = route?.params?.title;
  const body = route?.params?.body;

  const getApi = async () => {
    setLoading(true);
    const dataSet = [];
    const apiHolder = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${itemId | 1}/comments`,
    );
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
    }
    setLoading(false);
    SetdataA(dataSet);
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
