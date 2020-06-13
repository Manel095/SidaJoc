import {StyleSheet} from "react-native";
import Colors from 'theme/Colors';

export default styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: Colors.background,
        width: '100%',
        height: 56,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOptions: {
        position: 'absolute',
        right: 16
    },
    sidajocText: {
        color: Colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }


});
