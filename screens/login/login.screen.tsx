import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React, { useState } from "react";
import {
	Entypo,
	Fontisto,
	Ionicons,
	SimpleLineIcons,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import {
	Raleway_700Bold,
	useFonts,
	Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import { commonStyles } from "@/styles/common/common.styles";

const LoginScreen = () => {
	// let [fontsLoaded, fontError] = useFonts({
	// 	Raleway_700Bold,
	// 	Raleway_600SemiBold,
	// });

	// if (!fontsLoaded && !fontError) {
	// 	return null;
	// }

	const [userInfo, setUserInfo] = useState({ email: "", password: "" });
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [bottomSpinner, setBottomSpinner] = useState(false);
	const [required, setRequired] = useState(false);

	const handlePasswordValidation = (value: string) => {
		const password = value;
	};
	return (
		<LinearGradient
			colors={["#E5ECF9", "#F6F7F9"]}
			style={{ flex: 1, paddingTop: 20 }}
		>
			<ScrollView>
				<Image
					source={require("@/assets/sign-in/sign_in.png")}
					style={styles.signInImage}
				/>
				<Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
					Welcome Back!
				</Text>
				<Text
					style={[styles.learningText, { fontFamily: "Raleway_600SemiBold" }]}
				>
					Login to your existing account of Becodemy
				</Text>
				<View style={styles.inputContainer}>
					<View>
						<TextInput
							style={[commonStyles?.input, { paddingLeft: 40 }]}
							keyboardType="email-address"
							value={userInfo.email}
							placeholder="support@becodemy.com"
							onChangeText={(value) =>
								setUserInfo({ ...userInfo, email: value })
							}
						/>
						<Fontisto
							name="email"
							style={{ position: "absolute", left: 26, top: 17 }}
							size={20}
							color={"#A1A1A1"}
						/>
						{required && (
							<View style={commonStyles.errorContainer}>
								<Entypo name="cross" size={18} color="red" />
							</View>
						)}
					</View>
					<View>
						<TextInput
							style={[commonStyles?.input, { paddingLeft: 40 }]}
							keyboardType="default"
							secureTextEntry={!isPasswordVisible}
							value={userInfo.password}
							placeholder="**************"
							onChangeText={(value) =>
								setUserInfo({ ...userInfo, password: value })
							}
						/>
						<Fontisto
							name="email"
							style={{ position: "absolute", left: 26, top: 17 }}
							size={20}
							color={"#A1A1A1"}
						/>
						{required && (
							<View style={commonStyles.errorContainer}>
								<Entypo name="cross" size={18} color="red" />
							</View>
						)}
					</View>
				</View>
			</ScrollView>
		</LinearGradient>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	signInImage: {
		width: "60%",
		height: 250,
		alignSelf: "center",
		marginTop: 50,
	},
	welcomeText: {
		textAlign: "center",
		fontSize: 24,
	},
	learningText: {
		textAlign: "center",
		color: "#575757",
		fontSize: 15,
		marginTop: 5,
	},
	inputContainer: {
		marginHorizontal: 16,
		marginTop: 30,
		rowGap: 30,
	},
});
