import React, { useState, useEffect } from 'react';
import { 
  Button, 
  View, 
  Text,
  TextInput
} from 'react-native';
import auth from '@react-native-firebase/auth';

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>

        <TextInput 
          onChangeText={(txt) => setEmail(txt)}
          placeholder='Digite seu e-mail'
          value={ email } />

        <TextInput
          onChangeText={(txt) => setSenha(txt)}
          placeholder='Digite sua senha'
          secureTextEntry
          value={ senha } />

        <TextInput
          onChangeText={(txt) => setConfirmarSenha(txt)}
          placeholder='Confirme a senha'
          secureTextEntry
          value={ confirmarSenha } />        

        <Button
        onPress={() => {

          if ( email.trim().length === 0 || senha.length === 0 ) {
            alert('Preencha todos os dados!')
            return
          }

          if ( senha !== '' && senha !== confirmarSenha ) {
            alert('Senhas não conferem!')
            return
          }

          auth()
          //.signInWithEmailAndPassword(email, senha) // Autentica apenas
          .createUserWithEmailAndPassword(email, senha) // Cadastra e autentica
          .then(() => {
            setEmail('')
            setSenha('')
            setConfirmarSenha('')
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              alert('Endereço de email já cadastrado!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('Endereço de email inválido!');
            }
        
            console.error(error);
          });          
        }}
          title='Cadastro' />

        {/* <Button
          onPress={() => {
            auth().signInAnonymously()}}
          title='Login aônimo' /> */}
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button
        onPress={() => auth().signOut() }
        title='Sair' />
    </View>
  );
}

export default App