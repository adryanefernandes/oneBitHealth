import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: 'center',
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  form: {
    width: '100%',
    paddingTop: 20,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 5,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  button: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#ff0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButton: {
    fontSize: 20,
    color: "#fff",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  resultImc: {
    width: '100%',
    height: '50%'
  },
  listImcs: {
    marginTop: 20,
  },
  imcItemContainer: {
    fontSize: 24,
    color: 'red',
    height: 50,
    width: '100%',
    paddingRight: 20,
  },
  textItemContainer: {
    fontSize: 14,
    
  }
})

export default styles