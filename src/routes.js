
import CovidDashboard from './components/CovidDashboard';
import Map from './components/Map';
import Stats from './components/Stats';
import ChartDashboard from './components/Chart';

const appRoutes = [
  {
    path: '/',
    component: CovidDashboard,
  },
  {
    path: '/map',
    component: Map,
  },
  {
    path: '/stats',
    component: Stats,
  },

  {
    path: '/chartdashboard',
    component: ChartDashboard,
  }
];

export default appRoutes;
