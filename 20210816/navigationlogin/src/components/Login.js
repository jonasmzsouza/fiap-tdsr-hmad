import React, {
    useState
} from 'react'
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native'
import {
    Button,
    Input
} from 'react-native-elements'
import estilos from './styles/styles'

const Login = ( props ) => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');


    // Funções de validação
    function validarCredencial(login, senha, props){


        if(login === 'fiap' && senha === 'fiap')
            props.navigation.navigate('bemVindo', {
                nome: login
                });
        else
            alert('Login e/ou senha incorretos');
        }

    function validarInput(login, senha) {
        if (login.trim().length == 0 ){
            alert ('Informe corretamente o Login.')
            return false;
        }
        if (senha.trim().length == 0 ){
            alert ('Informe corretamente a senha.')
            return false;
        }
        return true;
    }

    return (
        
        <SafeAreaView>
            <View style={estilos.container}>
                <Text style={estilos.labelStyle}>
                    Informe seu login:
                </Text>

                <Input
                    onChangeText = {(txt) => setLogin(txt)}
                    value = { login }/>

                <Text style={estilos.labelStyle}>
                    Informe seu senha:
                </Text>
                
                <Input
                    secureTextEntry={true}
                    onChangeText = {(txt) => setSenha(txt)}
                    value = { senha }
                />

                <Button 
                    buttonStyle={estilos.btnStyle} 
                    title="Entrar" 
                    onPress={() => {
                    if(!validarInput(login, senha))
                        return;
                    else {
                        validarCredencial(login, senha, props)
                        setLogin('');
                        setSenha('');
                    }
                    }}
                />

            </View>
        </SafeAreaView>
    ) 
}

export default Login