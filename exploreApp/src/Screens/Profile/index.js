
import React from 'react';
import { ScrollView,Text } from 'react-native';
import styles from './styles';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scroll} >
     <Text style={styles.text}>Profil</Text>
    </ScrollView>

  );
};

export default Profile;
