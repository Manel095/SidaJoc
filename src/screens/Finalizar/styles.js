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
    buttonHomeEndText: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: 'bold'
    },
    buttonHomeEnd: {
        height: 52,
        width: '70%',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        marginBottom: 16,
        alignSelf: 'center',
        borderRadius: 8
    },
    finishText: {
        fontSize: 24,
        color: Colors.title,
        fontWeight: 'bold'
    }

});
