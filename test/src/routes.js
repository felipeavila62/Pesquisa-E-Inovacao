import {createAppContainer, createStackNavigator} from 'react-navigation';

import Main from '~/pages/Main';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
  }),
);

export default Routes;
