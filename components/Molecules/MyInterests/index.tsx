import { Text, TouchableOpacity, View } from "react-native";
import ChangeIcon from "../../../assets/icons/ChangeIcon.svg";

export default function MyInterests() {
  const tags = [
    { nome: "Mochilinha", corFundo: "#6B7AED" },
    { nome: "Mortinho", corFundo: "#EE544A" },
    { nome: "Fabio", corFundo: "#FF6961" },
    { nome: "Paredão Humano", corFundo: "#7D67EE" },
    { nome: "Estátua", corFundo: "#779ECB" },
    { nome: "Espantalho", corFundo: "#29D697" },
    { nome: "Foguetinho", corFundo: "#39D1F2" },
    { nome: "Roleiro", corFundo: "#CBAACB" },
    { nome: "Mão de alface", corFundo: "#F68F64" },
    { nome: "Pombo sem asa", corFundo: "#B39EB5" },
  ];

  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between ">
        <Text className="font-semibold text-[#120D26] mb-2 text-xl">
          Meus interesses
        </Text>

        <View className="flex flex-row items-center justify-center p-1 px-4 bg-[#f7d4c5] h-full rounded-2xl">
          <TouchableOpacity className="flex flex-row items-center justify-center">
            <ChangeIcon />
            <Text className="font-semibold text-sm text-[#C85B2C] ml-2">
              Mudar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row flex-wrap h-56 w-full  mt-6 rounded-xl">
        {tags.map((tag, index) => {
          return (
            <Text
              key={tag.nome}
              className=" px-4 py-2 rounded-full m-2 text-white font-semibold"
              style={{ backgroundColor: tag.corFundo }}
            >
              {tag.nome}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
