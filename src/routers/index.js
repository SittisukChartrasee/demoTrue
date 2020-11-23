import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PostScreen from '../pages/post.page';
import CommentScreen from '../pages/comment.page';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Comment" component={CommentScreen} />
    </Stack.Navigator>
  );
};
