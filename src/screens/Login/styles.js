import {StyleSheet} from "react-native";
import Colors from 'theme/Colors';

export default styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    logoContainer: {
        width: 312,
        height: 110,
        marginTop: 88,
        alignSelf:'center'
    },
    buttonLoginInformation: {
        height: 52,
        width: '70%',
        backgroundColor: Colors.button,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginTop: 80,
        borderRadius: 8,
        alignSelf: 'center'
    },
    buttonLoginInformationText:{
      fontSize: 16,
      color: Colors.title,
      fontWeight: 'bold'
    },
    buttonLoginRules: {
        height: 52,
        width: '70%',
        backgroundColor: Colors.button,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        borderRadius: 8,
        alignSelf:'center'
    },
    divider: {
        height: 2,
        width: '50%',
        backgroundColor: Colors.gray,
        marginTop: 32,
        alignSelf:'center'
    },
    buttonLoginStart: {
        height: 52,
        width: '70%',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        borderRadius: 8,
        alignSelf:'center'
    },
    buttonLoginStartText: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: 'bold'
    },
    nameLogin: {
        backgroundColor: Colors.white,
        marginTop: 16,
        borderWidth: 1,
        borderColor: Colors.title,
        borderRadius: 8,
        width: '70%',
        alignItems: 'center',
        paddingLeft: 8,
        alignSelf:'center'
    },
    scrollLogin: {
        flex: 1,
    }
});
