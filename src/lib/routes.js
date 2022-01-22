// import our pages that we are going to use
import { Boot, Home } from '../pages';

export default {
    boot: (params) => {
        console.log(params)
       
    },
    root: 'home',
    routes: [
        {
            path: 'home',
            component: Home,
            widgets: ['Menu'],
        },
        {
            path: '$',
            component: Boot,
        }
    ],
    beforeEachRoute: async(from, to) => {
        return true;
    }
}