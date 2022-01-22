import { Colors, Lightning, Router, Utils } from "@lightningjs/sdk";

export default class Home extends Lightning.Component {
    static _template() {
        return {
            rect: true, w: 1920, h: 1080,
            color: Colors('mustard').get(),
            Blur: {
                rtt: true, w: 1920, h: 1080,
                type: Lightning.components.FastBlurComponent, amount: 0,
                transitions: {
                    amount: { duration: 0.3 },
                    scale: { duration: 0.3 }
                },
                content: {
                    w: 1920, h: 1080,
                    Label: {
                        mount: 0.5, x: 960, y:540,
                        text: { text: 'Home Page', fontFace: 'Regular', fontSize: 128 }
                    },
                    Arrows: {
                        Left: {
                            flex: {},
                            mountY: 0.5, y: 540,
                            Arrow: {
                                flexItem: { marginRight: 20, marginLeft: 50 },
                                rotation: Math.PI * 1.5,
                                src: Utils.asset('arrow.png')
                            },
                            Label: {
                                mountY: 0.5, y: 24,
                                text: { text: 'Menu', fontFace: 'Regular', textAlign: 'right', lineHeight: 50 }
                            }
                        }
                    }
                }
            }
        }
    }

    _init() {
        this.application.on('blurContent', ({ amount, scale }) => {
            this.tag('Blur').setSmooth('amount', amount)
            this.tag('Blur').setSmooth('scale', scale, { duration: 0.3, timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)'})
        })
    }

    _handleLeft() {
        Router.focusWidget('Menu');
    }

    pageTransition() {
        return 'left';
    }
}