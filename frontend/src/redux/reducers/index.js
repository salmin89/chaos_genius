import { combineReducers } from 'redux';

import { dataSource } from './DataSource';
import { kpiExplorer } from './KpiExplorer';
import { dashboard } from './Dashboard';
import { aggregation } from './Aggregation';
import { dimension } from './Dimension';
import { hierarchial } from './Hierarchical';
import { onboarding } from './Onboarding';
import { lineChart } from './LineChart';
import { sidebar } from './Sidebarlist';
import { anomaly } from './Anomaly';
import { alert } from './Alert';
import { setting } from './setting';
import { config } from './Config';
const rootReducer = combineReducers({
  dataSource: dataSource,
  kpiExplorer: kpiExplorer,
  dashboard: dashboard,
  aggregation: aggregation,
  dimension: dimension,
  hierarchial: hierarchial,
  onboarding: onboarding,
  lineChart: lineChart,
  sidebar: sidebar,
  anomaly: anomaly,
  alert: alert,
  setting: setting,
  config: config
});

export default rootReducer;
