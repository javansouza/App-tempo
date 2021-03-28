import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast"

const mylist = [
        {
          "date": "27/03",
          "weekday": "Sáb",
          "max": 29,
          "min": 18,
          "description": "Tempestades",
          "condition": "storm"
        },
        {
          "date": "28/03",
          "weekday": "Dom",
          "max": 28,
          "min": 18,
          "description": "Tempestades",
          "condition": "storm"
        },
        {
          "date": "29/03",
          "weekday": "Seg",
          "max": 27,
          "min": 18,
          "description": "Tempestades",
          "condition": "storm"
        },
        {
          "date": "30/03",
          "weekday": "Ter",
          "max": 23,
          "min": 18,
          "description": "Tempestades",
          "condition": "storm"
        },
        {
          "date": "31/03",
          "weekday": "Qua",
          "max": 23,
          "min": 15,
          "description": "Tempestades",
          "condition": "storm"
        },
        {
          "date": "01/04",
          "weekday": "Qui",
          "max": 23,
          "min": 13,
          "description": "Parcialmente nublado",
          "condition": "cloudly_day"
        },
        {
          "date": "02/04",
          "weekday": "Sex",
          "max": 21,
          "min": 14,
          "description": "Parcialmente nublado",
          "condition": "cloudly_day"
        },
        {
          "date": "03/04",
          "weekday": "Sáb",
          "max": 22,
          "min": 15,
          "description": "Parcialmente nublado",
          "condition": "cloudly_day"
        },
        {
          "date": "04/04",
          "weekday": "Dom",
          "max": 22,
          "min": 15,
          "description": "Tempo nublado",
          "condition": "cloud"
        },
        {
          "date": "05/04",
          "weekday": "Seg",
          "max": 21,
          "min": 16,
          "description": "Tempo nublado",
          "condition": "cloud"
        }
];

export default function Home() {
  return (
    <SafeAreaView style={style.container}>
      <Menu />
      <Header />
      <Conditions />
      <FlatList 
      horizontal={true}
      contentContainerStyle={{ paddingBottom: '5%'}}
      style={style.list}
      data={mylist}
      keyExtractor={ item => item.date}
      renderItem={ ({ item }) => <Forecast data={item}/> }
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F0FF",
    paddingTop: "5%",
  },

  list:{
      marginTop: 10,
      marginLeft: 10,
  }
});
