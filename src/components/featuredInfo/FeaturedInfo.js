import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

import "./style.css"

const FeaturedInfo = () => {
    return (
        <div className="feature">
            <div className="featuredItems">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,456</span>
                    <span className="featuredMoneyRate">
                        -3.45 
                        <ArrowDownward className="featuredIcons negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItems">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,456</span>
                    <span className="featuredMoneyRate">
                        -1.45 
                        <ArrowDownward className="featuredIcons negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItems">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,456</span>
                    <span className="featuredMoneyRate">
                        +3.45 
                        <ArrowUpward className="featuredIcons" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo;