// import React from "react";
// import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
// import { Svg, Path } from "react-native-svg";

// import {
// useFonts,
// } from "@expo-google-fonts/dev";

// export default function Try (){

// 	let [fontsLoaded] = useFonts({
// 	});

// 	return (
// 		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
// 		<View style = {stylesheet._iPhone_13_Pro_Max___1}>
// 			<View style = {stylesheet._Rectangle_1}>
// 			</View>
// 			<View style = {[stylesheet._Dashboard, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._Dashboard, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Dashboard
// 			</Text>
// 			</View>
// 			<View style = {stylesheet._Rectangle_2}>
// 			</View>
// 			<View style = {stylesheet._Rectangle_5}>
// 			</View>
// 			<View style = {[stylesheet._Uncomfirmed_Orders, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._Uncomfirmed_Orders, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Uncomfirmed Orders
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._Active_Orders, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._Active_Orders, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Active Orders
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._10, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._10, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				10
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._05, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._05, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				05
// 			</Text>
// 			</View>
// 			<View style = {stylesheet._Rectangle_3}>
// 			</View>
// 			<View style = {stylesheet._Rectangle_4}>
// 			</View>
// 			<View style = {[stylesheet._Payment_Due, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._Payment_Due, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Payment Due
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._Active_Orders_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._Active_Orders_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				Active 
// Orders
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._PKR_10_000, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._PKR_10_000, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				PKR 
// 10,000
// 			</Text>
// 			</View>
// 			<View style = {[stylesheet._20, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
// 			<Text style = {[stylesheet._20, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
// 				20
// 			</Text>
// 			</View>
// 			<View style = {stylesheet._Line_1}>
// 			</View>
// 			<View style = {stylesheet._Line_2}>
// 			</View>
// 			<View style = {stylesheet._Line_3}>
// 			</View>
// 		</View>
// 		</ScrollView>
// 	)
// }

// const stylesheet = StyleSheet.create({
// 	_iPhone_13_Pro_Max___1: {
// 		position: "relative",
// 		width: Dimensions.get("window").width,
// 		height: 926,
// 		borderRadius: 0,
// 		overflow: "hidden",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		backgroundColor: "rgba(255, 255, 255, 1)",
// 		left: 0,
// 		top: 0,
// 	},
// 	_Rectangle_1: {
// 		position: "absolute",
// 		width: 428,
// 		height: 59,
// 		borderRadius: 0,
// 		opacity: 1,
// 		borderWidth: 1,
// 		borderColor: "rgba(250, 236, 236, 1)",
// 		left: 0,
// 		right: "auto",
// 		top: 0,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		backgroundColor: "rgba(255, 255, 255, 1)",
// 	},
// 	_Dashboard: {
// 		position: "absolute",
// 		width: 196,
// 		height: 41,
// 		left: 30,
// 		right: "auto",
// 		top: 9,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto Flex",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 31,
// 		color: "rgba(0, 0, 0, 1)",
// 		textAlign: "left",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Rectangle_2: {
// 		position: "absolute",
// 		width: 298,
// 		height: 161,
// 		borderRadius: 12,
// 		opacity: 1,
// 		left: 70,
// 		right: "auto",
// 		top: 122,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		backgroundColor: "rgba(123, 73, 73, 1)",
// 	},
// 	_Rectangle_5: {
// 		position: "absolute",
// 		width: 298,
// 		height: 161,
// 		borderRadius: 12,
// 		opacity: 1,
// 		left: 70,
// 		right: "auto",
// 		top: 530,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		backgroundColor: "rgba(123, 73, 73, 1)",
// 	},
// 	_Uncomfirmed_Orders: {
// 		position: "absolute",
// 		width: 196,
// 		height: 56,
// 		left: 116,
// 		right: "auto",
// 		top: 140,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto Flex",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 26,
// 		color: "rgba(255, 255, 255, 1)",
// 		textAlign: "center",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Active_Orders: {
// 		position: "absolute",
// 		width: 196,
// 		height: 56,
// 		left: 116,
// 		right: "auto",
// 		top: 548,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto Flex",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 26,
// 		color: "rgba(255, 255, 255, 1)",
// 		textAlign: "center",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_10: {
// 		position: "absolute",
// 		width: 196,
// 		height: 56,
// 		left: 116,
// 		right: "auto",
// 		top: 220,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto Flex",
// 		fontWeight: 700,
// 		textDecorationLine: "none",
// 		fontSize: 26,
// 		color: "rgba(255, 255, 255, 1)",
// 		textAlign: "center",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_05: {
// 		position: "absolute",
// 		width: 196,
// 		height: 56,
// 		left: 116,
// 		right: "auto",
// 		top: 628,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto Flex",
// 		fontWeight: 700,
// 		textDecorationLine: "none",
// 		fontSize: 26,
// 		color: "rgba(255, 255, 255, 1)",
// 		textAlign: "center",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Rectangle_3: {
// 		position: "absolute",
// 		width: 163,
// 		height: 161,
// 		borderRadius: 12,
// 		opacity: 1,
// 		left: 24,
// 		right: "auto",
// 		top: 326,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		backgroundColor: "rgba(0, 171, 226, 1)",
// 	},
// 	_Rectangle_4: {
// 		position: "absolute",
// 		width: 163,
// 		height: 161,
// 		borderRadius: 12,
// 		opacity: 1,
// 		left: 231,
// 		right: "auto",
// 		top: 326,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		backgroundColor: "rgba(87, 1, 17, 1)",
// 	},
// 	_Payment_Due: {
// 		position: "absolute",
// 		width: 109,
// 		height: 65,
// 		left: 51,
// 		right: "auto",
// 		top: 344,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto Flex",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 26,
// 		color: "rgba(255, 255, 255, 1)",
// 		textAlign: "center",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Active_Orders_2: {
// 		position: "absolute",
// 		width: 109,
// 		height: 65,
// 		left: 258,
// 		right: "auto",
// 		top: 344,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto Flex",
// 		fontWeight: 400,
// 		textDecorationLine: "none",
// 		fontSize: 26,
// 		color: "rgba(255, 255, 255, 1)",
// 		textAlign: "center",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_PKR_10_000: {
// 		position: "absolute",
// 		width: 196,
// 		height: 56,
// 		left: 7,
// 		right: "auto",
// 		top: 416,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto Flex",
// 		fontWeight: 700,
// 		textDecorationLine: "none",
// 		fontSize: 26,
// 		color: "rgba(255, 255, 255, 1)",
// 		textAlign: "center",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_20: {
// 		position: "absolute",
// 		width: 112,
// 		height: 24,
// 		left: 256,
// 		right: "auto",
// 		top: 426,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 		fontFamily: "Roboto Flex",
// 		fontWeight: 700,
// 		textDecorationLine: "none",
// 		fontSize: 26,
// 		color: "rgba(255, 255, 255, 1)",
// 		textAlign: "center",
// 		textAlignVertical: "top",
// 		letterSpacing: 0.1,
// 	},
// 	_Line_1: {
// 		position: "absolute",
// 		width: 349,
// 		height: 0,
// 		borderRadius: undefined,
// 		borderWidth: 1,
// 		borderStyle: "solid",
// 		borderColor: "rgba(0, 0, 0, 1)",
// 		left: 43,
// 		right: "auto",
// 		top: 307,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 	},
// 	_Line_2: {
// 		position: "absolute",
// 		width: 194,
// 		height: 0,
// 		borderRadius: undefined,
// 		borderWidth: 1,
// 		borderStyle: "solid",
// 		borderColor: "rgba(0, 0, 0, 1)",
// 		left: 214,
// 		right: "auto",
// 		top: 307,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "90deg"},
// 		],
// 	},
// 	_Line_3: {
// 		position: "absolute",
// 		width: 359,
// 		height: 0,
// 		borderRadius: undefined,
// 		borderWidth: 1,
// 		borderStyle: "solid",
// 		borderColor: "rgba(0, 0, 0, 1)",
// 		left: 33,
// 		right: "auto",
// 		top: 500,
// 		bottom: "auto",
// 		transform: [
// 			{translateX: 0},
// 			{translateY: 0},
// 			{rotate: "0deg"},
// 		],
// 	},
// });
