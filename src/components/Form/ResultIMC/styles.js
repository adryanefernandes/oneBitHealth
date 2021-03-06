import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 60,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
  },
  message: {
    fontSize: 18,
    color: '#ff0043',
    fontWeight: 'bold'
  },
  resultImc: {
    fontSize: 48,
    color: '#ff0043',
    fontWeight: 'bold'
  },

  boxShare: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10
  },
  shared: {
    backgroundColor: '#1877f2',
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
  },
  sharedText: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 30
  }
})

export default styles