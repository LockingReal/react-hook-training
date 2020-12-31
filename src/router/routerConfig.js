import Home from '../pages/home/home';
console.log(Home);
const publicRoutes = [
  {
    path: '/',component:Home,exact: true,
    params:{
      title:'主页',
      hide:false
    }
  }
];

export default publicRoutes;