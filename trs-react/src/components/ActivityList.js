import React, { useState, useEffect } from "react";
import ActivityDataService from "../services/ActivityService";
import { Link } from "react-router-dom";

const ActivityList = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = () => {
        ActivityDataService.getAll()
            .then(response => {
                setActivities(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list row">
            <div className="col-md-6">
                <h4>Activity List</h4>

                <ul className="list-group">
                    {activities &&
                        activities.map((activity, index) => (
                            <li
                                className={
                                    "list-group-item"
                                }
                                key={index}
                            >
                                {activity.code}
                                {activity.budget}

                                <Link
                                    to={"/activities/" + activity.id}
                                >
                                    Edit
                                </Link>
                                asd
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default ActivityList;