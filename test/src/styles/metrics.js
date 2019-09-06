import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  fontSize: {
    small: 10,
    medium: 14,
    big: 18,
    extraBig: 24,
  },
};
