import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export default function Sololearn(props) {
    const [tipeImage, setTipeImage] = useState('');
    const { params } = props.route;
    const Image_one = params.toString().trim();
   
    useEffect(() => {
        setTipeImage(Image_one)
    }, [tipeImage])

    return (
        <View style={styles.container}>
            <ReactNativeZoomableView
                zoomEnabled={true}
                maxZoom={1.5}
                minZoom={0.5}
                zoomStep={0.25}
                initialZoom={1}
                bindToBorders={true}
                style={styles.zoomableView}>
                {
                    tipeImage == 'JavaScript' ?
                        (
                            <Image
                                style={styles.image}
                                source={
                                    require('../../../assets/images/images_certificados/certificado_JavaScript.png')
                                }
                                resizeMode="stretch"
                            />
                        )
                        : tipeImage == 'Html' ?
                            (
                                <Image
                                    style={styles.image}
                                    source={
                                        require('../../../assets/images/images_certificados/certificado_html.png')
                                    }
                                    resizeMode="stretch"
                                />
                            )
                            : tipeImage == 'PHP' ?
                                (
                                    <Image
                                        style={styles.image}
                                        source={
                                            require('../../../assets/images/images_certificados/certificado_php.png')
                                        }
                                        resizeMode="stretch"
                                    />
                                )
                                : tipeImage == 'Css' &&
                                (
                                    (
                                        <Image
                                            style={styles.image}
                                            source={
                                                require('../../../assets/images/images_certificados/certificado_CSS.png')
                                            }
                                            resizeMode="stretch"
                                        />
                                    )
                                )
                }

            </ReactNativeZoomableView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e7e7',
        borderRadius: 20
    },
    zoomableView: {
        padding: 10,
        //backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
});

