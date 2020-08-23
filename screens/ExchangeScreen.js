import React from 'react';
import { Text, View } from 'react-native';
import db from '../config';
import firebase from 'firebase';
var Id=[]

export default class ExchangeScreen extends React.Component {
  constructor(){
    super()
    this.state = {
      userId:firebase.auth().currentUser.email,
      ItemName:"",
      Description:""
    }

  }
  createUniqueId=()=>{
    Id = [random(1,9),random(1,9),random(1,9),random(1,9),random(1,9)]
  }
  addItems=(id)=>{
    this.addRequest(this.state.ItemName,this.state.Description,id)
  }
  render(){
    return(
        <View style={{flex:1}}>
            <MyHeader title="Request Book"/>
           <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Item Name"}
                onChangeText={(text)=>{
                    this.setState({
                      ItemName:text
                    })
                }}
                value={this.state.ItemName}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"Description"}
                onChangeText ={(text)=>{
                    this.setState({
                      Description:text
                    })
                }}
                value ={this.state.Description}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{addItems(Id)}}
                >
                <Text>Add Item</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}