import React, { useState } from "react";
import ActivityDataService from "../services/ActivityService";

const ActivityAdd = () => {
    const initialActivityState = {
        id: null,
        code: "",
        budget: 0,
        active: false
    };
    const [activity, setActivity] = useState(initialActivityState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    };

    const saveActivity = () => {
        const data = {
            code: activity.code,
            budget: activity.budget,
            active: false
        };

        ActivityDataService.create(data)
            .then(response => {
                setActivity({
                    id: response.data.id,
                    code: response.data.code,
                    budget: response.data.budget,
                    active: response.data.active
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newActivity = () => {
        setActivity(initialActivityState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newActivity}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="code"
                            required
                            value={activity.code}
                            onChange={handleInputChange}
                            name="code"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="budget">Budget</label>
                        <input
                            type="text"
                            className="form-control"
                            id="budget"
                            required
                            value={activity.budget}
                            onChange={handleInputChange}
                            name="budget"
                        />
                    </div>

                    <button onClick={saveActivity} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default ActivityAdd;