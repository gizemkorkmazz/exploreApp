
import React from 'react';
import { ScrollView,Text } from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scroll} >
     <Text style={styles.text}>Anasayfa</Text>
    </ScrollView>

  );
};

export default Home;
