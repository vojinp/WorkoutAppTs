import {NavigationActions, NavigationContainerComponent} from "react-navigation";

class NavigatorService {
    private _navigator?: NavigationContainerComponent;

    navigate(routeName: string, params: any) {
        if (!this._navigator) {
            throw new Error("Navigator not set.");
        }
        this._navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }

    public setNavigator(navigator: NavigationContainerComponent) {
        this._navigator = navigator;
    }
}

export default new NavigatorService();
