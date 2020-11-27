//this file created for access to navigation outside of react component
import {NavigationActions} from 'react-navigation';

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}