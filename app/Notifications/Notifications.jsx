import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

//obtienes tu token
export  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const {
            status: existingStatus,
        } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== "granted") {
            alert("Failed to get push token for push notification!");
            return;
        }
        //let test = await Notifications.getExpoPushTokenAsync()
        token = await Notifications.getExpoPushTokenAsync();
        //console.log('soy tu test', test );
        //console.log("soy tu token", token);
    } else {
        alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
            name: "testName",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "red",
        });
    }

    return token.data;
}