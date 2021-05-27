import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {RFValue} from 'react-native-responsive-fontsize';
import Animation from '../Components/Animation';
import { render } from 'react-dom';

export default class AskScreen extends React.Component{
    constructor(){
        super();
      this.state={
        userId:firebase.auth().currentUser.email,
        topic:'',
        question:''
      }
      }
    
  
    
    
    getQuestion=()=>{
      var bookRequest = db.collection("questions").where("user_id","==",this.state.userId).get().then((snapshot)=>{snapshot.forEach((doc)=>{
       
         
         
        })})
    }
  
    addQuestion = async(question,topic)=>{
        var userId = this.state.userId
        
            
        db.collection('questions').add({
            "user_id": userId,
            "question":question,
            "topic":topic,
                     
            "date":firebase.firestore.FieldValue.serverTimestamp(),
           
        })
       
        
        
    
        this.setState({
            question :'',
            topic : '',
           
        })
    
        return alert("Question asked successfully");
      }

     
    render(){
    
  
      return(
        <View style={{flex:1}}>
            <Text>Ask</Text>
            <View>
            <TextInput
             
              placeholder={"enter question"}
                   onChangeText={(text)=>{
                       this.setState({
                           question:text
                       })
                   }}      
             
            />
           
            <View>
            <TextInput
              style ={{height:300}}
                            numberOfLines ={8}
              placeholder={"topic"}
              onChangeText ={(text)=>{
                  this.setState({
                      topic:text
                  })
              }}
              value ={this.state.topic}
            />
           
            <TouchableOpacity
             
              onPress={()=>{this.addQuestion(this.state.question,this.state.topic)}}
              >
              <Text>Ask</Text>
            </TouchableOpacity>
            </View>
            
      </View>
      </View>
  
      )
    
        
        
    }
}