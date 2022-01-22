import { Lightning, Router, Colors, Utils } from '@lightningjs/sdk';

export default class Boot extends Lightning.Component {
    static _template() {
        return {
            rect: true, w: 1920, h: 1080,
            color: Colors('credersi-blue').get(),
            Header: {
                mount: 0.5, x: 950, y: 540,
                text: 'Welcome to our Lightning Application', fontFace: 'Regular', fontSize: 128
            },
            Arrows: {
                Enter: {
                    mountX: 0.5, x: 960, y: 980,
                    text: { text: 'Press enter to go home', fontFace: 'Regular'}
                }
            },
        }
    }

    _handleEnter() {
        // Router.resume();
        Router.navigate('Home');
    }
}