import { StyleSheet } from 'react-native';
import ColorTheme from 'Helpers/ColorTheme';
import { wp ,FontSizeDict} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    backgroundColor:ColorTheme.App.Primary,
    paddingHorizontal: wp(10),
    paddingVertical:wp(3),
  },
  scroll:{flex:1,backgroundColor:ColorTheme.App.Primary},
  text:{
    color: ColorTheme.WhiteSmoke,
    fontSize:FontSizeDict.font17,
  },

  
});

export default styles;
