import { Link, useRouter } from 'expo-router';
import styles from '../src/styles';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity  } from 'react-native';
import Logo from '../src/assets/SVG/logo.svg';
import BackLogo from '../src/assets/SVG/backLogo.svg';
import Arrow from '../src/assets/SVG/rightArrow.svg';


export default function Onboarding() {

  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Link
            href={'/home'}
            style={{
              position: 'absolute',
              top: 64,
              left: 311,
              height: 18,
              width: 34
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500
              }}
            >
              Pular
            </Text>
          </Link>
          <BackLogo
            width={283}
            height={443}
            style={localStyle.backLogo}
          />
          <Logo
            width={224}
            height={121}
            style={localStyle.logo}
          />
          <View style={localStyle.containerText}>
            <Text
              style={{
                color: '#000000',
                fontSize: 32,
                fontWeight: 500
              }}
            >
              Bem vindo a PEX
            </Text>
            <Text
              style={styles.text}
            >
              Economize tempo e dinheiro em todas as etapas da sua obra. Na reforma ou construção nós iremos te auxiliar em tudo.
            </Text>
          </View>
          
          <View style={localStyle.containerButton}>
            <TouchableOpacity
              style={localStyle.button}
              onPress={ () => router.push('/home')}
            >
              <Arrow
                width={17}
                height={15}
              />
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  backLogo: {
    position: 'absolute',
    top: -17,
    left: 22
  },
  logo: {
    position: 'absolute',
    top: 241,
    left: 76
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 484,
    left: 32,
    width: 311,
    height: 62
  },
  containerButton: {
    position: 'absolute',
    top: 600,
    left: 32,
  },
  button: {
    position: 'absolute',
    left: 249,
    backgroundColor: '#F09200',
    borderRadius: 50,
    width: 62,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center'
  }
})