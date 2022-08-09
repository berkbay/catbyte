import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get('window')
export const styles = StyleSheet.create({

    //Header Component
    customHeaderView: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:60
    },
    customHeaderText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize:20
    },

    // User Card Item
    homeCardContainer: {
        flex:1,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'#D3D3D3',
        marginHorizontal:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    homeCardImage: {
        height:height*0.2,
        width:width*0.4
    },
    homeCardBodyContainer: {
        marginHorizontal:10,
        marginVertical:5
    },
    homeCardItemText: {
        fontWeight: '700',
        fontSize:15,
    },

    // UserDetai Components
    textContainerItemContainer: {
        flexDirection:'row',
        alignItems:'flex-end',
        marginVertical:2.5
    },
    textContainerInfoText: {
        fontWeight:'700',
        fontSize:16,
        textDecorationLine:'underline',
    },
    textContainerUserText: {
        fontWeight:'500',
        fontSize:14,
    },
    userDetailImage: {
        height:height*0.3,
        width:width*0.8,
        alignSelf:'center'
    },


    //Loading Component
    loadingContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    //NewUserComponents
    newUserButtonContainer: {
        borderRadius: 20,
        backgroundColor: 'blue',
        height:40,
        width: width* 0.5,
        position:'absolute',
        bottom: 20,
        left:width*0.25,
        justifyContent:'center',
    },
    newUserButtonText: {
        textAlign: 'center',
        fontSize:16,
        color:'#FFF'
    },
    textInputNewUser: {
        borderColor:'grey',
        borderWidth:1,
        padding:10,
        borderRadius:40,
        marginVertical:10
    }
})
