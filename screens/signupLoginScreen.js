import React from 'react';
import { StyleSheet, Text, Alert, View,TouchableOpacity,TextInput,KeyboardAvoidingView,Modal,ScrollView} from 'react-native';
import db from '../config' ;
import firebase from 'firebase'; 

export default class SignupLoginScreen extends React.Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            isModalVisible:true
        }
    }
    userLogin=(email,password)=>{
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(()=>{
          return (Alert.alert("successful login"),
          this.props.navigation.navigate('Donate'),
          this.setState({
            email: ''
          })
          )    
      })
      .catch((error)=>{
          var errorCode = error.code;
          var errorMessage = error.message;
          return (
            Alert.alert(errorMessage)
            
            )   
      })
  }
  userSignup=(email,password)=>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((response)=>{
          return Alert.alert("user added successfully")    
          
      })
      .catch(function (error){
          var errorCode = error.code;
          var errorMessage = error.message;
          return (
            Alert.alert(errorMessage),
            console.log("email",email),
            console.log("password",password)
            )  
      })
  }   
  showModal = ()=>{
    return(
      this.setState({
        isModalVisible:true
      }),
    <Modal
      animationType="slide"
      transparent={true}
      visible={this.state.isModalVisible}
      >
      <View style={styles.modalContainer}>
        <ScrollView style={{width:'100%'}}>
          <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
          <Text
            style={styles.modalTitle}
            >Registration</Text>
          <TextInput
            style={styles.formTextInput}
            placeholder ={"First Name"}
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                firstName: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Last Name"}
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                lastName: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Contact"}
            maxLength ={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
                contact: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Address"}
            multiline = {true}
            onChangeText={(text)=>{
              this.setState({
                address: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Email"}
            keyboardType ={'email-address'}
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          /><TextInput
            style={styles.formTextInput}
            placeholder ={"Password"}
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                password: text
              })
            }}
          /><TextInput
            style={styles.formTextInput}
            placeholder ={"Confrim Password"}
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                confirmPassword: text
              })
            }}
          />
          <View style={styles.modalBackButton}>
             <TouchableOpacity
              style={styles.registerButton}
              onPress={()=>
                this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
              }
            >
            <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalBackButton}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={()=>this.setState({"isModalVisible":false})}
            >
              
            <Text style={{color:'#ff5722'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Modal>,
     Alert.alert("Show model executed")
  )
  }

  render(){   
  return (
    <View style={styles.container}>
       
        <TextInput 
                style={styles.loginBox}
                keyboardType={'email-address'}
                onChangeText={(text)=>{
                  this.setState({
                    email: text
                  })
                }}
              />
         <TextInput 
                style={styles.loginBox}
                secureTextEntry = {true}
                onChangeText={(text)=>{
                  this.setState({
                    password: text
                  })
                }}
              />  
               
              
        <View >  
          <TouchableOpacity
             style={[styles.button,{marginBottom:20, marginTop:90}]}
             onPress = {()=>{
               console.log(this.state.email, this.state.password)
               this.userLogin(this.state.email, this.state.password)
             }}
             >
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>
  
           <TouchableOpacity
             style={styles.button}
             onPress={()=>{
              this.showModal();
              Alert.alert("I  m displayed");
              this.setState({ isModalVisible:true});
              }}
             >
             <Text style={styles.buttonText}>SignUp</Text>
           </TouchableOpacity>  
           </View> 
           
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container:{ 
    flex:1,
    backgroundColor:'#fff' ,
    padding:8,
    paddingTop:10
  }, 
  profileContainer:{ 
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   }, 
  loginBox:{ 
    marginTop:70,
    width: 300, 
    height: 40,
    alignSelf:'center',
    borderColor : '#ff8a65', 
    fontSize: 20,
    margin:10,
    paddingLeft:70 ,
  
    borderWidth:  3
  }, 
  button:{ 
    width:300, 
    marginLeft:50,
    height:40, 
    justifyContent:'center', 
    alignItems:'center', 
    alignSelf:'center',
    borderRadius:0, 
    backgroundColor:"#f8aa00", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8, }, 
    shadowOpacity: 0.30, 
    shadowRadius: 10.32, 
    elevation: 16, 
  },
  buttonText:{ 
    color:'#ffff', 
    fontWeight:'200', 
    fontSize:20 
  },
  buttonContainer:{ 
    flex:1, 
    alignItems:'center' 
  }
});
