import { Image, SafeAreaView, View, Dimensions, Text, TouchableOpacity } from "react-native";
import styles from "../src/styles";
import Const from '../src/assets/const.jpg';
import { useRouter } from "expo-router";

export default function Construntion() {
  const router = useRouter()
  const { width, height } = Dimensions.get('screen');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={Const} 
          style={{
            marginTop: 30,
            borderRadius: 25,
            width: width,
            height: height * 0.5
          }}
        />

        <View
          style={{
            alignItems: 'center',
            marginVertical: 40
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: 500,
            }}
          >Área em construção</Text>
          <TouchableOpacity
            onPress={ () => router.back()}
            style={styles.button}
          >
            <Text style={{ fontSize: 24, fontWeight: 400 }}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}