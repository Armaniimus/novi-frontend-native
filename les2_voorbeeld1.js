import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

function Item(props) {
  return(
    <View style={styles.item}>
        <Text>{props.item}</Text>
      </View>
  );
}

export default function App() {
  const [data, setData] = useState([
    'Ewoud',
    'Emiel',
    'Martin',
    'Sharon'
  ]);

  const renderItem = ({item}) => {
    return (
      <Item item={item} />
    )
  }
  
  return (
    <View style={{ flex: 1}}>
      <FlatList data={data} renderItem={renderItem}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }
});
