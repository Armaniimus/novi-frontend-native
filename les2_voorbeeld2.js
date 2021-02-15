import axios from 'axios';
import React, {useState, useEffect} from 'react';
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
  
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(
        'https://api.chucknorris.io/jokes/categories'
      );

      setData(res.data);

      console.log(res.data);
    }

    getCategories();
  }, []);

  const renderItem = ({item}) => {
    return (
      <Item item={item} />
    )
  }
  
  return (
    <View style={{ flex: 1}}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item} />
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
