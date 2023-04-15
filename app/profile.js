import { useRouter, usePathname, Link } from "expo-router";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "../src/styles";
import Navbar from "../src/components/navbar";
import ProfileImg from '../src/assets/profile.png';
import Tabbar from "../src/components/tabbar";
import Navigator from "../src/components/navigator";
import Seta from '../src/assets/SVG/setaDireita.svg';
import Bookmarkfull from '../src/assets/SVG/bookmarkfull.svg';
import Headphone from '../src/assets/SVG/headphone.svg';
import Door from '../src/assets/SVG/door.svg';
import Interrog from '../src/assets/SVG/interrog.svg';

export default function Profile() {
  const router = useRouter();
  const path = usePathname();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Navbar router={router} path={path} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Image source={ProfileImg}/>
          <View>
            <Text>Olá, Maria</Text>
            <Text>maria@velty.com.br</Text>
          </View>
          <Seta width={94} height={44} />
        </View>

        <View>
          <View style={{
            margin: 20,
            width: 311,
          }}>
            <Text style={styles.subtitle}>Sua conta Pex</Text>

            <View style={{ marginTop: 10 }}>
              <Navigator
                Icon={Bookmarkfull}
                description={'Cotação'}
                route={'/construction'}
              />

              <Navigator
                Icon={Headphone}
                description={'Ajuda e suporte'}
                route={'/construction'}
              />

              <Navigator
                Icon={Interrog}
                description={'FAQ'}
                route={'/construction'}
              />
            </View>

            <View marginTop={40}>
              <Navigator
                Icon={Door}
                description={'Sair da conta'}
                route={'/construction'}
                color='#EA5B5B'
              />
            </View>

          </View>

          <View>

          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 580,
            left: 50
          }}
        >
          <Tabbar />
        </View>
      </View>
    </SafeAreaView>
  );
}