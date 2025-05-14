import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
};

export default function Button({label}: Props) {
    return (
        <View style={[
            styles.buttonContainer,
            { borderWidth:4, borderColor: "blue", borderRadius: 18},
        ]}>
            <Pressable
                style={[styles.button, {backgroundColor: "black"}]}
                onPress={() => alert("Button Pressed.")}
            >

                <FontAwesome
                    name="picture-o"
                    size={18}
                    color="purple"
                    style={styles.buttonIcon}
                />

                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16,
    },
});