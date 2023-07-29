import React, {useEffect, useState} from "react";
import axios from "axios";
import {ScaleLoader} from "react-spinners";

export default function Plans() {
    const [plans, setPlans] = useState(null)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/plan').then((response) => {
            setPlans(response.data)
            console.log(response.data)
        })

    }, [])




    return <>

            <div className="plans">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {!plans &&
                                <div className="text-center">
                                    <ScaleLoader color="#7352C7FF"/>
                                </div>
                            }

                            {plans &&
                            <div className="table-inner">
                                <table className="table  table-dark  table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        plans.map(plan =>
                                        <tr key={plan.id}>
                                            <td>
                                                {plan.account}
                                            </td>
                                            <td>
                                                {plan.step}
                                            </td>
                                            <td>
                                                {plan.daily_draw_down}
                                            </td>
                                            <td>
                                                {plan.max_draw_down}
                                            </td>

                                        </tr>
                                        )

                                    }
                                    </tbody>
                                </table>
                            </div> }
                        </div>
                    </div>
                </div>
            </div>

    </>

}