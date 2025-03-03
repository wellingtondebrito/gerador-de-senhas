import React, { useState } from "react";
import { SafeAreaView} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { styles } from "./Style";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Inputs } from "../../components/Inputs";
import generatePass from "../../services/passwordServices";
import * as Clipboard from 'expo-clipboard';

const Home = () => {
  const [pass, setPass] = useState("")

  const handleGenerateButton = () => {
    let generateToken = generatePass()
    setPass(generateToken)
  }

  const handleCopy = () =>{
    Clipboard.setStringAsync(pass)
  }

  return (
    <SafeAreaView style={styles.container}>
        <Logo/>
        <Inputs pass={pass}/>
        <Button title="Gerar senha! 🚀" handlePass={handleGenerateButton}/>
        <Button title="Copiar Senha! 📑" handlePass={handleCopy}/>
        
        <StatusBar style="auto" />
    </SafeAreaView>
      
    
  );
};

export default Home;


  