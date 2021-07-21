import React from 'react'

import "./style.css"

const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={"widget__large-btn " + type}>{type}</button>
    }

    return (
        <div className="widget__large">
            <span className="widget__large-title">Recent Transactions</span>
            <table className="widget__large-table">
                <tr className="widget__large-tr">
                    <th className="widget__large-th">Customer</th>
                    <th className="widget__large-th">Date</th>
                    <th className="widget__large-th">Amount</th>
                    <th className="widget__large-th">Status</th>
                </tr>
                <tr className="widget__large-td">
                    <td className="widget__large-user">
                        <img 
                            src="https://freesvg.org/img/1519501415.png"
                            alt="User"
                            className="widget__large-img"
                        />
                        <span className="widget__large-username">John Doe</span>
                    </td>
                    <td className="widget__large-date">02-12-2021</td>
                    <td className="widget__large-amount">$2,502</td>
                    <td className="widget__large-status">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widget__large-td">
                    <td className="widget__large-user">
                        <img 
                            src="https://freesvg.org/img/1519501415.png"
                            alt="User"
                            className="widget__large-img"
                        />
                        <span className="widget__large-username">John Doe</span>
                    </td>
                    <td className="widget__large-date">02-12-2021</td>
                    <td className="widget__large-amount">$2,502</td>
                    <td className="widget__large-status">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widget__large-td">
                    <td className="widget__large-user">
                        <img 
                            src="https://freesvg.org/img/1519501415.png"
                            alt="User"
                            className="widget__large-img"
                        />
                        <span className="widget__large-username">John Doe</span>
                    </td>
                    <td className="widget__large-date">02-12-2021</td>
                    <td className="widget__large-amount">$2,502</td>
                    <td className="widget__large-status">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widget__large-td">
                    <td className="widget__large-user">
                        <img 
                            src="https://freesvg.org/img/1519501415.png"
                            alt="User"
                            className="widget__large-img"
                        />
                        <span className="widget__large-username">John Doe</span>
                    </td>
                    <td className="widget__large-date">02-12-2021</td>
                    <td className="widget__large-amount">$2,502</td>
                    <td className="widget__large-status">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widget__large-td">
                    <td className="widget__large-user">
                        <img 
                            src="https://freesvg.org/img/1519501415.png"
                            alt="User"
                            className="widget__large-img"
                        />
                        <span className="widget__large-username">John Doe</span>
                    </td>
                    <td className="widget__large-date">02-12-2021</td>
                    <td className="widget__large-amount">$2,502</td>
                    <td className="widget__large-status">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widget__large-td">
                    <td className="widget__large-user">
                        <img 
                            src="https://freesvg.org/img/1519501415.png"
                            alt="User"
                            className="widget__large-img"
                        />
                        <span className="widget__large-username">John Doe</span>
                    </td>
                    <td className="widget__large-date">02-12-2021</td>
                    <td className="widget__large-amount">$2,502</td>
                    <td className="widget__large-status">
                        <Button type="Declined" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg;
