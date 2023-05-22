import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import OnboardingItem from "./OnboardingItem";
import slides from "../slides";

export default Onboarding = () => {
    return (
        <View style={StyleSheet.container}>
            <FlatList data={slides} renderItem={({item}) => <OnboardingItem item={item}/>}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        justifyContent: "center",
        alignItems: "center"
    }
})