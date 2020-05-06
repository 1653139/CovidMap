import CovidDashboard from './components/CovidDashboard';
import ChartDashboard from './components/Chart';

const appRoutes = [
  {
    path: '/',
    component: CovidDashboard,
  },
  {
    path: '/map',
    component: CovidDashboard,
  },
  {
    path: '/stats',
    component: ChartDashboard,
  }
];

export default appRoutes;
