import {StyleSheet} from "react-native";
import Colors from 'theme/Colors';

export default styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.white,
        flex:1
    },
    textQuestionTitle: {
        fontSize: 18,
        color: Colors.title,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 16
    },
    textQuestionResponse: {
        fontSize: 14,
        color: Colors.title,
        textAlign: 'center',
        margin: 16
    },
    buttonResponse: {
        height: 52,
        width: '80%',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        marginBottom: 16,
        borderRadius: 8,
        alignSelf:'center'
    },
    buttonResponseText: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: 'bold'
    },
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        width: '90%',
        backgroundColor: Colors.white,
        alignSelf: 'center',
        marginTop: 120,
        borderRadius: 16,
        borderColor: Colors.title,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8
    },
    textModal: {
        color: Colors.title,
        margin: 8,
        fontSize: 18
    }

});
