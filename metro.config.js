const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Remove a extensão 'svg' dos assetExts para tratar como código fonte
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
// Adiciona 'svg' na lista de extensões de código fonte para o metro transformar
config.resolver.sourceExts.push("svg");

// Configura o transformer para usar o react-native-svg-transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
