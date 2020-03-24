/*
  Desarrollador: David Carbajal Rios
  Fecha: 04/03/2020                                 Grupo: TI01SM-18
  Descripsción: La de registro muestra un interfaz donde aparece tres formas de ingresar ya sea por      cuanta de google, facebook o registrarse de manera manual ingresando nombre de usuario, correo,        contraseña y número de célular al lado izquierdo muestra los iconos de cada uno de ellos.
  =================  ================  ================= =======
  Se añade la api y los mensajes de alerta donde podremos verificar si se
  guardaron con exito los datos de registro y el props (constructor).
  fecha que se pudo terminar 24/03/2020
  */

import React,{Component} from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon, Right} from 'native-base';
import {StyleSheet} from 'react-native';

import api from '../data/api';

class Registro extends Component{

  constructor(props){
    super(props);
    this.state = {
      user:'',
      pass:'',
      email:''
    }
  }

 register = () => api.registerData(this.state.user, this.state.pass, this.state.email,)



  mensaje = ()=>{alert('Datos guardados')};
  render(){
      const navegar = this.props.navigation;
      return(
      <Container>

          <Content padder contentContainerStyle = {misEstilos.content}>
            <Card>

            <CardItem header bordered>
                    <Text style = {misEstilos.textCenter}>Registrar</Text>
            </CardItem>
              <CardItem bordered>
                <Body style = {misEstilos.body}>

                  
                  <Item inlineLabel>
                        <Icon type = 'FontAwesome' name = 'user'></Icon>
                        <Input
                            placeholder = "Nombre de Usuario"
                            onChangeText={(user)=>this.setState({user})}
                        />
                  </Item>

                  <Item inlineLabel last>
                    <Icon type = 'Entypo' name = 'email'></Icon>
                    <Input
                      placeholder = 'Correo'
                      onChangeText={(email)=>this.setState({email})}
                    />
                  </Item>

                  <Item inlineLabel last>
                      <Icon type = 'FontAwesome' name = 'lock'></Icon>
                      <Input type="password"
                          placeholder = 'Contraseña'
                          onChangeText={(pass)=>this.setState({pass})}
                          secureTextEntry={true}
                      />
                  </Item>
                  
                </Body>
              </CardItem>


              <CardItem footer bordered>  
                <Button primary style = {misEstilos.boton}
                  onPress={() => navegar.navigate('Login')}>
                    <Text>Login</Text>
                </Button>

                <Button primary style = {misEstilos.boton} 
                  onPress={this.register}>
                    <Text>Guardar</Text>
                </Button>

                
              </CardItem>       

            </Card>

            <Card>
              <CardItem header bordered>
                <Text style = {misEstilos.textCenter}>Puedes regirtrarte tambien por:</Text>
              </CardItem>

              <CardItem>
                <Icon type = 'AntDesign' name = 'facebook-square'></Icon>
                <Text>Facebook</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>

              <CardItem>
                <Icon type = 'AntDesign' name = 'googleplus'></Icon>
                <Text>Facebook</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>

           </Card>
        </Content>
      </Container>
      );
    }
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },

  textCenter:{
    textAlign: 'center',
    width: '100%',
  },

  boton: {
    marginLeft: '15%',
  },

  body: {
    paddingVertical: 30,
  },
  
});

export default Registro;