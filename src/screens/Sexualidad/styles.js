import {StyleSheet} from "react-native";
import Colors from 'theme/Colors';

export default styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.white,
        flex:1
    },
    textHeader: {
        marginTop: 32,
        marginLeft: 24,
        marginRight: 24,
        fontSize: 16,
        color: Colors.title,
        fontWeight: 'bold'
    },
    scrollContainer:{
        flex: 1,
    },
    buttonQuestion: {
        marginLeft: 24,
        marginRight: 24,
        marginTop: 12,
        marginBottom: 4,
        flexDirection: 'row',
        height: 64,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.title,
        alignItems: 'center',
        paddingLeft: 8,
        justifyContent: 'center'
    },
    subSectionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.title,
        marginLeft: 24,
        marginTop: 8,
        marginBottom: 8
    }

});
