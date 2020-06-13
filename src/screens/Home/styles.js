import {StyleSheet} from "react-native";
import Colors from 'theme/Colors';

export default styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.white,
        flex: 1
    },
    nameTag: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    nameTagText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.title
    },
    card: {
        height:116,
        flexDirection:'row',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.title,
        elevation: 4,
        borderRadius: 8,
        margin: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
    },
    iconGo: {
        flexDirection: 'row',
        margin: 4,
        justifyContent: 'space-between',
    },
    successView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 4,
        borderRadius: 4
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
        borderRadius: 8,
        alignSelf:'center'
    },
    buttonHomeEndText: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: 'bold'
    },
});
