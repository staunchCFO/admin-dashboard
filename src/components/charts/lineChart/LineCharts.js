import React from 'react'
import { 
    LineChart, 
    Line, 
    XAxis,
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';

import "./style.css"

const LineCharts = ({ title, data, dataKey }) => {
      
    return (
        <div className="linechart">
            <h3 className="linechart__title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineCharts;
