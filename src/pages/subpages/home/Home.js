import React from 'react'
import LineChart from '../../../components/charts/lineChart/LineCharts'
import FeaturedInfo from '../../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../../components/widgetLg/widgetLg'
import WidgetSm from '../../../components/widgetSm/WidgetSm'
import { userData } from '../../../dummyData'

import "./style.css"

const Home = () => {
    return (
        <div>
            <FeaturedInfo />
            <LineChart data={userData} title="User Analytics" dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home;