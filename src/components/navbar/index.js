import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Logo from '../../assets/SVG/logo.svg';
import Cart from '../../assets/SVG/cart.svg';
import Notification from '../../assets/SVG/notification.svg';
import Arrow from '../../assets/SVG/leftArrow.svg';


export default function Navbar({ router, path }) {

  const Nav = ({ children }) => {
    return (
      <View
        style={localStyles.Navbar}
      >
        {children}
      </View>
    );
  };

  if(path.includes('/profile')) return (
    <Nav>
      <Logo width={94} height={44} />
    </Nav>
  );

  if(path.includes('/home')) return (
    <Nav>
      <Logo width={94} height={44} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 68 
        }}
      >
        <TouchableOpacity
          onPress={ () => router.push('/construction') }
        >
          <Cart width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => router.push('/construction') }
        >
          <Notification width={24} height={24} />
        </TouchableOpacity>
      </View>
    </Nav>
  );
}

const localStyles = StyleSheet.create({
  Navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 40,
    marginHorizontal: 25,
  }
});