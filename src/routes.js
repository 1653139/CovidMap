import CovidDashboard from './components/CovidDashboard';
import ChartDashboard from './components/Chart';

const appRoutes = [
  {
    path: '/',
    component: CovidDashboard,
  },
  {
    path: '/chartdashboard',
    component: ChartDashboard,
  }
];

export default appRoutes;
