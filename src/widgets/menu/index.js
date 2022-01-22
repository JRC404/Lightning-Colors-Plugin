import { Colors, Lightning, Router } from "@lightningjs/sdk";
import MenuItem from './MenuItem'; // this is going to used shortly

export default class Menu extends Lightning.Component {
    static _template() {
        return {
            rect: true, w: 500, h: 1920, color: Colors('red-crayola').get(), x: -500,
            transitions: {
                x: { duration: 0.3, timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)'},
                w: { duration: 0.3, timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)'}
            },
            Items: {
                y: 540, mountY: 0.5,
                flex: { direction: 'column' },
                Home: {
                    x: 160,
                    type: MenuItem, label: 'Home', pageId: 'home',
                },
            }
        }
    }

    _init() {
        this._index = 0; // remember index for later on
    }

    _focus() {
        this.patch({
            smooth: {
                x: -100
            }
        })

        this.application.emit('blurContent', { amount: 3, scale: 1.2 });
        // blur the page behind the menu
    }

    _unfocus() {
        this.patch({
            smooth: {
                x: -500
            }
        })

        this.application.emit('blurContent', { amount: 0, scale: 1 });

    }
    // the handle events... what happens when we press certain keys?

    _handleUp() {
        if ( this._index > 0 ) {
            this._index--;
        }
    }

    _handleRight() {
        Router.focusPage();
        // hiding the menu as the user has moved away from it
    }

    _handleDown() {
        if ( this._index < this.tag('Items').children.length - 1) {
            this._index++;
        }
    }

    _handleLeft() {
        console.log('The left has been pressed')
    }

    _handleEnter() {
        Router.restoreFocus();
        // Router.navigate(this.tag('Items').children[this_index].pageId);
        Router.navigate(this.activeItem.pageId);
        // Navigating to the item that has been selected, using the pageId
    }

    get activeItem() {
        return this.tag('Items').children[this._index];
        // checks the item we are focused on and returns that item to be used in the this.activeItem.pageId
    }

    _getFocused() {
        return this.activeItem;
    }
}