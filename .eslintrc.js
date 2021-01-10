module.exports = {
  root: true,
  extends: '@react-native-community',
  rules:{
		// 解决let被强转为const问题
		"prefer-const": 0,
		// 保存代码时缩进4个空格
    // "indent": ['error', 4],
    // 保存代码时缩进4个空格
    "prettier/prettier": ["error", {"tabWidth": 4}],
  }
};
