import * as React from 'react';
import {Provider} from "react-redux";
import store from "./config/store";
import {NavigationContainerComponent} from "react-navigation";

import NavigatorService from "./services/NavigatorService";
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator ref={(r: NavigationContainerComponent) => {
                    return NavigatorService.setNavigator(r);
                }}/>
            </Provider>
        );
    }
}