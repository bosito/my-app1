import React from 'react';
import { WebView } from 'react-native-webview';

export default function GithView(){
    return <WebView source={{ uri: 'https://github.com/bosito' }} />;
}
