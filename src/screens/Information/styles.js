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
        justifyContent: 'space-between'
    },
    tagVia: {
        width: 22,
        height: 62,
        backgroundColor: Colors.vias,
        borderRadius: 7
    },
    tagPrevencion: {
        width: 22,
        height: 62,
        backgroundColor: Colors.prevencion,
        borderRadius: 7
    },
    tagText: {
        fontSize: 16,
        color: Colors.title
    },
    tagDiagnostico: {
        width: 22,
        height: 62,
        backgroundColor: Colors.diagnostico,
        borderRadius: 7
    },
    tagVIH: {
        width: 22,
        height: 62,
        backgroundColor: Colors.vih,
        borderRadius: 7
    },
    tagMaternidad: {
        width: 22,
        height: 62,
        backgroundColor: Colors.maternidad,
        borderRadius: 7
    },
    tagPregunton: {
        width: 22,
        height: 62,
        backgroundColor: Colors.pregunton,
        borderRadius: 7
    },
    tagSexualidad: {
        width: 22,
        height: 62,
        backgroundColor: Colors.sexualidad,
        borderRadius: 7
    }
});
