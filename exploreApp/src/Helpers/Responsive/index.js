import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const widthPercentageToDP = widthPercent => {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

const heightPercentageToDP = heightPercent => {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

const FontSizeDict = {
  font1: width / (360 / 1),
  font2: width / (360 / 2),
  font3: width / (360 / 3),
  font4: width / (360 / 4),
  font5: width / (360 / 5),
  font6: width / (360 / 6),
  font7: width / (360 / 7),
  font8: width / (360 / 8),
  font9: width / (360 / 9),
  font10: width / (360 / 10),
  font11: width / (360 / 11),
  font12: width / (360 / 12),
  font13: width / (360 / 13),
  font14: width / (360 / 14),
  font15: width / (360 / 15),
  font16: width / (360 / 16),
  font17: width / (360 / 17),
  font18: width / (360 / 18),
  font19: width / (360 / 19),
  font20: width / (360 / 20),
  font21: width / (360 / 21),
  font22: width / (360 / 22),
  font23: width / (360 / 23),
  font24: width / (360 / 24),
  font25: width / (360 / 25),
  font26: width / (360 / 26),
  font27: width / (360 / 27),
  font28: width / (360 / 28),
  font29: width / (360 / 29),
  font30: width / (360 / 30),
  font31: width / (360 / 31),
  font32: width / (360 / 32),
  font33: width / (360 / 33),
  font34: width / (360 / 34),
  font35: width / (360 / 35),
  font36: width / (360 / 36),
  font37: width / (360 / 37),
  font38: width / (360 / 38),
  font39: width / (360 / 39),
  font40: width / (360 / 40),
  font41: width / (360 / 41),
  font42: width / (360 / 42),
  font43: width / (360 / 43),
  font44: width / (360 / 44),
  font45: width / (360 / 45),
  font46: width / (360 / 46),
  font47: width / (360 / 47),
  font48: width / (360 / 48),
  font49: width / (360 / 49),
  font50: width / (360 / 50),
  font51: width / (360 / 51),
  font52: width / (360 / 52),
  font53: width / (360 / 53),
  font54: width / (360 / 54),
  font55: width / (360 / 55),
  font56: width / (360 / 56),
  font57: width / (360 / 57),
  font58: width / (360 / 58),
  font59: width / (360 / 59)
};

export { widthPercentageToDP as wp, heightPercentageToDP as hp, FontSizeDict };
