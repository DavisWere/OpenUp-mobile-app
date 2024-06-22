import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function HomeScreen() {
  return (
    <>
     <View style={[globalStyles.Secondary, {flex: 1}] }>
      <Text>Screens shown after sign in</Text>
     </View>
    </>
  );
}
