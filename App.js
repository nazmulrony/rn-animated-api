import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
    Animated,
    PanResponder,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function App() {
    // const anim = useRef(new Animated.Value(0)).current;
    // function moveBall() {
    //     Animated.timing(anim, {
    //         toValue: 1,
    //         duration: 4000,
    //         useNativeDriver: true,
    //     }).start();

    //     setTimeout(() => {
    //         for (let i = 5000000000; i < 10; i++) {}
    //     }, 1000);
    // }

    // function fadeIn() {
    //     Animated.timing(anim, {
    //         toValue: 1,
    //         duration: 600,
    //         useNativeDriver: true,
    //     }).start();
    // }
    // function fadeOut() {
    //     Animated.timing(anim, {
    //         toValue: 0,
    //         duration: 600,
    //         useNativeDriver: true,
    //     }).start();
    // }

    //react native pan responder
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [null, { dx: pan.x, dy: pan.y }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: () => {
                pan.extractOffset();
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Animated.View
                    style={[
                        {
                            height: 100,
                            width: 100,
                            borderRadius: 100 / 2,
                            // opacity: anim,
                            backgroundColor: "blue",
                            // transform: [{translateX: pan.x}, {translateY: pan.y}]
                        },
                        pan.getLayout(),
                    ]}
                    {...panResponder.panHandlers}
                ></Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
