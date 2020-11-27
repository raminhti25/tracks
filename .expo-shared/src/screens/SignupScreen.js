import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* clear error message when go to another screen */}
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign up for tracker"
        errorMessage={state.errorMessag}
        submitButtonText="Sign up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? sign in instead!"
      />
    </View>
  );
};

//hide header
SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 10,
    flex: 1, //extend view
    justifyContent: "center", //align content vertically
    marginBottom: 250
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginRight: 15
  }
});

export default SignupScreen;
