import React from 'react'
import { WebView } from 'react-native-webview';

export default function IbisPaintView() {
    return <WebView source={{ uri: 'https://ibispaint.com/artist2/1753240291470620/' }} />;
}