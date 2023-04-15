import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    paddingTop: StatusBar.currentHeight
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 500
  },
  subtitle: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 500
  },
  text: {
    color: "#999999",
    fontSize: 14,
    fontWeight: 400
  },
  button: {
    backgroundColor: '#F09200',
    paddingVertical: 5,
    paddingHorizontal: 20, 
    marginTop: 10,
    borderRadius: 25
  }
});

export default styles;