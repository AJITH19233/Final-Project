import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


function Scorecard() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10,   label: 'Aptitude' },
            { id: 1, value: 15,   label: 'Coding' },
            { id: 2, value: 20,   label: 'Reasoning' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
export default Scorecard;