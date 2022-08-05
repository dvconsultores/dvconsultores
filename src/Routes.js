// import AddRemove from '@/pages/Pool/AddRemove/AddRemove';
// import Assets from '@/pages/Assets/Assets';
// import AvailableAssets from '@/pages/Assets/AvailableAssets';
// import BridgeColor from '@/pages/Bridge/BridgeColor';
// import BridgeIcon from '@/pages/Bridge/BridgeIcon';
// import BridgeMulti from '@/pages/Bridge/BridgeMulti';
// import BridgeSimple from '@/pages/Bridge/BridgeSimple';
import Error from "@/pages/Error/Error";
import Home from '@/pages/Home/Home';
// import Landing from '@/components/Landing/Landing';
import Layout from '@/components/Layout/Layout';
import Proyectos from '@/pages/Proyectos/Proyectos';
import Router from 'vue-router';
// import StablePools from '@/pages/Pool/StablePools';
// import Swap from '@/pages/Swap/Swap';
import Vue from 'vue';


Vue.use(Router);

export default new Router({
  routes: [    
    {
      path: '',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/home',
          name: 'Home',
          component: Home,
        },
        {
          path: '/proyectos',
          name: 'Proyectos',
          component: Proyectos,
        },
        
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
