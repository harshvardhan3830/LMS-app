import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import {
	Nunito_400Regular,
	Nunito_600SemiBold,
	Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData } from "@/constants/constants";
import { router } from "expo-router";
import { commonStyles } from "@/styles/common/common.styles";
import { styles } from "@/styles/onboarding/onboard";

const WelcomeIntroScreen = () => {
	let [fontsLoaded, fontError] = useFonts({
		Raleway_700Bold,
		Nunito_400Regular,
		Nunito_700Bold,
		Nunito_600SemiBold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
		<LinearGradient
			colors={["#E5ECF9", "#F6F7F9", "#E8EEF9"]}
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<View style={{ marginTop: 80 }}>
				<Image source={item.image} style={style.slideImage} />
				<Text style={[commonStyles.title, { fontFamily: "Raleway_700Bold" }]}>
					{item.title}
				</Text>
				<Text
					style={[
						commonStyles.description,
						{ fontFamily: "Nunito_400Regular" },
					]}
				>
					{item?.description}
				</Text>
				<Text
					style={[
						commonStyles.description,
						{ fontFamily: "Nunito_400Regular" },
					]}
				>
					{item?.shortDescription}
				</Text>
				<Text
					style={[
						commonStyles.description,
						{ fontFamily: "Nunito_400Regular" },
					]}
				>
					{item?.shortDescription2}
				</Text>
			</View>
		</LinearGradient>
	);
	return (
		<AppIntroSlider
			renderItem={renderItem}
			data={onboardingSwiperData}
			onDone={() => {
				router.push("/(routes)/login");
			}}
			onSkip={() => {
				router.push("/(routes)/login");
			}}
			renderNextButton={() => (
				<View style={commonStyles.buttonContainer}>
					<Text
						style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}
					>
						Next
					</Text>
				</View>
			)}
			renderDoneButton={() => (
				<View style={commonStyles.buttonContainer}>
					<Text
						style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}
					>
						Done
					</Text>
				</View>
			)}
			showSkipButton={false}
			dotStyle={commonStyles.dotStyles}
			bottomButton={true}
			activeDotStyle={commonStyles.activeDotStyle}
		/>
	);
};

export default WelcomeIntroScreen;

const style = StyleSheet.create({
	slideImage: {
		alignSelf: "center",
		marginBottom: 30,
	},
});
