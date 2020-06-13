import {StyleSheet} from "react-native";
import Colors from 'theme/Colors';

export default styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.white,
        flex: 1
    },
    scrollContainer: {
        flex: 1,
        padding: 8,
    },
    titleContainer: {
        backgroundColor: 'red',
        flex: 1
    },
    imageScroll: {
        alignSelf: 'center',
        margin: 16
    },
    textTitle: {
        fontSize: 16,
        color: Colors.title,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 8
    },
    textRules: {
        fontSize: 14,
        marginBottom: 8,
        flex: 1,
        textAlign:'justify'
    },
    textRulesFinal: {
        fontSize: 14,
        marginBottom: 16,
        flex: 1,
        textAlign:'justify',
    }
});
