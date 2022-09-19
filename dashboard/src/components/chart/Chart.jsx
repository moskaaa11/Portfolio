import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name:'January',
    Total: 1100
  },
  {
    name:'February',
    Total: 1200
  },
  {
    name:'March',
    Total: 1600
  },
  {
    name:'April',
    Total: 1200
  },
  {
    name:'May',
    Total: 1300
  },
  {
    name:'June',
    Total: 800
  },
  {
    name:'July',
    Total: 700
  },
  {
    name:'August',
    Total: 500
  },
  {
    name:'September',
    Total: 1500
  },
  {
    name:'October',
    Total: 1600
  },
  {
    name:'November',
    Total: 1600
  },
  {
    name:'December',
    Total: 1100
  },
];


const Chart = ({aspect, title}) => {
  return (
    <div className='chart'>
      <h2 className="title">
        {title}
      </h2>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="rgba(255, 109, 109)" fill="rgba(255, 109, 109)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart