import React from 'react';
import MyNavigation from "./app/Navigation/MyNavigation";

export default function App() {
  return (
    <MyNavigation/>
  );
}

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) =>
  //     setExpoPushToken(token)
  //   );
  // }, []);