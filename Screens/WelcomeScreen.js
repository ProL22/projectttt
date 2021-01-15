import * as React from 'react'
import {TextInput,View,StyleSheet,TouchableOpacity,Image, Button} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import {Header} from 'react-native-elements'
export default class WelcomeScreen extends React.component{
constructor(){
      super()
      this.state={
          EmailId:'',
          Password:'',
      }
}
 usersignup=(EmailId,Password)=>{
    firebase.auth().createUserWithEmailAndPassword(EmailId, Password)
    .then((user) => {
      alert("User SignedUp")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error Message")
    });
 }
 usersignin=(EmailId,Password)=>{
    firebase.auth().signInWithEmailAndPassword(EmailId, Password)
    .then(() => {
      alert("User Logged In")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error Message")
    });
 }
   render(){
       return(
           <View>
                  <Header
                          backgroundColor={"yellow"}
                          centerComponent={{
                              text:'EveryDayNeeds',
                              style:{color:'#fff',fontSize:10 }
                          }}
                  />
                  <TextInput
                             style={styles.TextI}
                             placeholder="Email eg.EverDay@Needs.com"
                             keyboardType='email-address'
                             onChangeText={(text)=>{
                                 this.setState({EmailId:text})
                             }
                            }                     
                  />
                  <TextInput
                          style={style.TextI}
                          placeholder="Password"
                          secureTextEntry={true}
                          onChangeText={(text)=>{
                               this.setState({Password:text})
                          }
                        }
                />
                 <Button title='Signup' color='orange'onPres={()=>{this.usersignup(this.state.EmailId,this.state.Password)}}/>
                 <Button title='Signin' color='orange'onPres={()=>{this.usersignin(this.state.EmailId,this.state.Password)}}/>
           </View>
       )
   }
}
const styles = StyleSheet.create({
 TextI:{
     width:200,
     height:50,
     border:'solid',
     borderRadius:10
     
 }
})