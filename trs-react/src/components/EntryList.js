import React, { useState, useEffect } from "react";
import EntryDataService from "../services/EntryService";
import { Link } from "react-router-dom";

const EntryList = () => {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = () => {
        EntryDataService.getAll()
            .then(response => {
                setEntries(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    console.log(entries)

    return (
        <div className="list row">
            <div className="col-md-6">
                <h4>Entry List</h4>

                <ul className="list-group">
                    {entries &&
                        entries.map((activity, index) => (
                            <li
                                className={
                                    "list-group-item"
                                }
                                key={index}
                            >
                                {activity.code}
                                {activity.budget}

                                <Link
                                    to={"/entries/" + activity.id}
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

export default EntryList;