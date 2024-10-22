
// useState: creates state, makes getter and setter
import React, {useState} from 'react';
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';


function App(): React.JSX.Element {

  //  create state variable - syntax => const [<getter>, <setter>] = useState(<initial value>)
  const [value, setValue] = useState("0");


  function processButton(key: string){
    if(key == "AC"){
      setValue("0"); 
    }
    else if(key == "="){
      setValue(String(eval(value)));
    }
    else if(key == "C"){
      setValue(value.slice(0, -1));
    }
    else {
      if(value == "0"){
        if(isNaN(Number(key)) == true){
          setValue(value + key);
        }
        else{
          setValue(key);
        }
      }
      else if(isNaN(Number(key)) == true){
        if(value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%'){
          setValue(value.slice(0,-1)+key) // concatenation
        }
        else{
          setValue(value + key);
        }
      }
      else{
        setValue(value + key) // concatenation
      }
    }
    
  }

  function testNumber(input: string){
    if (/^[0-9]+$/.test(input)) {
      return true;
    } 
    else if (/^[a-zA-Z]+$/.test(input)) {
        return false;
    }
  }
  
  return (
    <View
      style = {styles.container}>

      <View
      style = {{
        
      }}>
        <Text style={{fontSize:20, height: "20%"}}>{value}</Text>
      </View>

      <View
        style = {styles.row}>
        <Text style={styles.button}>
          <Button title="AC" color="#d4d4d2" onPress={()=>processButton("AC")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="()" color="#d4d4d2" onPress={()=>processButton("()")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="%" color="#d4d4d2" onPress={()=>processButton("%")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="C" color= "#ff9500" onPress={()=>processButton("/")}/>
        </Text>
      </View>

      <View
      style = {styles.row}>
        <Text style={styles.button}>
          <Button title="7" color="#505050" onPress={()=>processButton("7")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="8" color="#505050" onPress={()=>processButton("8")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="9" color="#505050" onPress={()=>processButton("9")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="/" color= "#ff9500" onPress={()=>processButton("*")}/>
        </Text>
      </View>

      <View
      style = {styles.row}>
        <Text style={styles.button}>
          <Button title="4" color="#505050" onPress={()=>processButton("4")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="5" color="#505050" onPress={()=>processButton("5")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="6" color="#505050" onPress={()=>processButton("6")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="x" color= "#ff9500" onPress={()=>processButton("x")}/>
        </Text>
      </View>

      <View
      style = {styles.row}>
        <Text style={styles.button}>
          <Button title="1" color="#505050" onPress={()=>processButton("1")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="2" color="#505050" onPress={()=>processButton("2")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="3" color="#505050" onPress={()=>processButton("3")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="-" color= "#ff9500" onPress={()=>processButton("-")}/>
        </Text>
      </View>

      <View
      style = {styles.row}>
        <Text style={styles.button}>
          <Button title="0" color="#505050" onPress={()=>processButton("0")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="." color="#505050" onPress={()=>processButton(".")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="=" color="#505050" onPress={()=>processButton("=")}/>
        </Text>
        <Text style={styles.button}>
          <Button title="+" color= "#ff9500" onPress={()=>processButton("+")}/>
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10,
    backgroundColor: "#1c1c1c"
  },

  row: {
    flexDirection: "row",
    justifyContent: 'space-around',
    height: "10%"
  },

  button: {
    fontSize:20,
    width:"25%",
    textAlign:'center',
    borderRadius: 50
  }
})

export default App;