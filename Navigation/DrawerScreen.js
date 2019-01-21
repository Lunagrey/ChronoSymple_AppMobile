import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, TouchableOpacity, TouchableHighlight, StyleSheet} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { COLOR, ThemeProvider, Toolbar, Drawer, Avatar } from 'react-native-material-ui';
import { Icon } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';

class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View>
            <TouchableOpacity style={{ margin: 20, flex: 1, justifyContent : 'center', alignItems: 'center', flexDirection : 'row'}}
            onPress={this.navigateToScreen('Stack')}>
              <Icon style={{ flex: 1}} size='20' color="grey" name="add-circle-outline" size={30}/>
              <Text style={{ flex: 2, marginLeft: 20 , backgroundColor: '#fff', fontSize: 20}}>
                Ajouter un module
              </Text>
            </TouchableOpacity>
            {/* <TouchableRipple
             style={{ margin: 20, flex: 1, justifyContent : 'center', alignItems: 'center', flexDirection : 'row'}}
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
  <View>
  <Icon style={{ flex: 1}} size='20' color="grey" name="add-circle-outline" size={30}/>
              <Text style={{ flex: 2, marginLeft: 20 , backgroundColor: '#fff', fontSize: 20}}>
                Ajouter un module
              </Text>
  </View>
  </TouchableRipple>  */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
  },
  welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      color: "#000066"
  },
  welcomePress: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      color: "#ffffff"
  },
  button: {
      borderColor: "#000066",
      borderWidth: 1,
      borderRadius: 10
  },
  buttonPress: {
      borderColor: "#000066",
      backgroundColor: "#000066",
      borderWidth: 1,
      borderRadius: 10
  }
  });

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

/*
            <TouchableHighlight 
              onPress={this.navigateToScreen('ModulePlace')}
              style={[
                styles.button,
                this.state.pressed ? this.color = 'blue' : {}
              ]}
              onHideUnderlay={() => {
                this.setState({ pressed: false });
              }}
              onShowUnderlay={() => {
                this.setState({ pressed: true });
              }}
              >
              <Icon style={{ flex: 1}} size='20' color="grey" name="add-circle-outline" size={30}/>
              <Text style={{ flex: 2, marginLeft: 20 , backgroundColor: '#fff', fontSize: 20}} color={this.color}>
                Ajouter un module
              </Text>
            </TouchableHighlight>

*/

/*const uiTheme = {
  palette: {
      primaryColor: COLOR.green500,
      accentColor: COLOR.pink500,
    },
  toolbar: {
      container: {
          height: 50,
          paddingTop: 0,
        },
    },
    constructor(props, context) {
      super(props, context);
      this.state = {
          active: 'people',
        };
    }
  
    _setInfoActive() {
      this.setState({ active: 'info' });
    }
  
    render() {
      return (
          <ThemeProvider uiTheme={uiTheme}>
                  <Container>
                      <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                      <Toolbar
                      leftElement="arrow-back"
                      onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
                      centerElement=""
                  />
                      <View style={styles.container}>
                          <Drawer>
                              <Drawer.Header >
                                  <Drawer.Header.Account
                                  avatar={<Avatar text={'K'} />}
                                  accounts={[
                                      { avatar: <Avatar text="H" /> },
                                      { avatar: <Avatar text="L" /> },
                                  ]}
                                  footer={{
                                      dense: true,
                                      centerElement: {
                                          primaryText: 'Kevin Le',
                                          secondaryText: 'kevin@codeprototype.com',
                                        },
                                      rightElement: 'arrow-drop-down',
                                    }}
                              />
                              </Drawer.Header>
                              <Drawer.Section
                              divider
                              items={[
                                  {
                                      icon: 'bookmark-border', value: 'Bookmarks',
                                      active: this.state.active == 'bookmark',
                                      onPress: () => {
                                          this.setState({ active: 'bookmark' });
                                          this.props.navigation.navigate('Bookmark');
                                        },
                                    },
                                  {
                                      icon: 'today', value: 'Calendar',
                                      active: this.state.active == 'calendar',
                                      onPress: () => {
                                          this.setState({ active: 'calendar' });
                                          this.props.navigation.navigate('Calendar');
                                        },
                                    },
                                  {
                                      icon: 'people', value: 'Clients',
                                      active: this.state.active == 'client',
                                      onPress: () => {
                                          this.setState({ active: 'client' });
                                          this.props.navigation.navigate('Client');
                                        },
                                    },
                              ]}
                          />
                              <Drawer.Section
                              title="Personal"
                              items={[
                                  {
                                      icon: 'info', value: 'Info',
                                      active: this.state.active == 'info',
                                      onPress: () => {
                                          this.setState({ active: 'info' });
  
                                          //this.props.navigation.navigate('DrawerClose');
                                          this.props.navigation.navigate('Info');
                                        },
                                    },
                                  {
                                      icon: 'settings', value: 'Settings',
                                      active: this.state.active == 'settings',
                                      onPress: () => {
                                          this.setState({ active: 'settings' });
                                          this.props.navigation.navigate('Settings');
                                        },
                                    },
                              ]}
                          />
                          </Drawer>
                      </View>
                  </Container>
              </ThemeProvider>*/
/*
const uiTheme = {
  palette: {
      primaryColor: COLOR.green500,
      accentColor: COLOR.pink500,
    },
  toolbar: {
      container: {
          height: 50,
          paddingTop: 0,
        },
    },
  }
  */
export default DrawerScreen;