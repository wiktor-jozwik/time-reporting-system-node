import React, {useEffect, useState} from "react";
import EntryDataService from "../services/EntryService";
import ActivityDataService from "../services/ActivityService";
import Select from "react-select";
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';
import GoBackButton from "./GoBackButton";
import moment from "moment";
import {useHistory, useParams} from "react-router-dom";


const EntryAddUpdate = () => {
    const [activities, setActivities] = useState([])
    const history = useHistory()

    const {id} = useParams()

    const initialEntryState = {
        id: null,
        date: moment(),
        subCode: "",
        description: "",
        time: null,
        activityId: null,
    };
    const [entry, setEntry] = useState(initialEntryState);
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
        fetchActivities();
        if (id) {
            fetchExistingEntryId()
        }
    }, []);

    const fetchExistingEntryId = () => {
        EntryDataService.get(id)
            .then(response => {
                setEntry(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const fetchActivities = () => {
        ActivityDataService.getAll()
            .then(response => {
                const activities = response.data
                    .filter(activity => {
                        return activity.active === true
                    })
                    .map(activity => {
                        return {
                            value: activity.id,
                            label: activity.code
                        }
                    })

                setActivities(activities);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleInputChange = event => {
        const {name, value} = event.target;
        setEntry({...entry, [name]: value});
    };

    const saveEntry = () => {
        const data = {
            date: entry.date,
            subCode: entry.subCode,
            description: entry.description,
            time: entry.time,
            activityId: entry.activityId
        };

        EntryDataService.create(data)
            .then(response => {
                setEntry({
                    id: response.data.id,
                    date: response.data.date,
                    subCode: response.data.subCode,
                    description: response.data.description,
                    time: response.data.time,
                    activityId: response.data.activityId
                });
                setSubmitted(true);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const updateEntry = () => {
        EntryDataService.update(id, entry)
            .then(() => {
                setSubmitted(true);
                history.push('/entries')
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newEntry = () => {
        setEntry(initialEntryState);
        setSubmitted(false);
    };

    const findActivityLabel = (activityId) => {
        const found = activities.find(act => act.value === activityId)

        return found && found.label
    }

    const getSelectedActivity = () => {
        if (entry) {
            return {
                value: entry.activityId,
                label: findActivityLabel(entry.activityId)
            }
        }
    }

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newEntry}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <form onSubmit={() => id ? updateEntry() : saveEntry()}>
                        <div className="form-group">
                            <label htmlFor="code">Activity</label>

                            <Select
                                onChange={(event) => setEntry({...entry, activityId: event.value})}
                                options={activities}
                                value={getSelectedActivity()}
                            />
                            {
                                <input
                                    tabIndex={-1}
                                    autoComplete="off"
                                    style={{opacity: 0, height: 0}}
                                    value={entry.activityId}
                                    required
                                />
                            }

                        </div>

                        <div className="form-group">

                            <label htmlFor="code">Date</label>
                            <Calendar
                                onChange={(event) => setEntry({...entry, date: event})}
                                className="form-control"
                                value={new Date(entry.date)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Time</label>
                            <input
                                type="number"
                                min="0"
                                className="form-control"
                                id="time"
                                required
                                value={entry.time}
                                onChange={handleInputChange}
                                name="time"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subCode">Subcode</label>
                            <input
                                type="text"
                                className="form-control"
                                id="subCode"
                                value={entry.subCode}
                                onChange={handleInputChange}
                                name="subCode"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={entry.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </div>

                        <button type="submit" className="btn btn-success">
                            Submit
                        </button>

                        <GoBackButton/>
                    </form>

                </div>
            )}
        </div>
    );
};

export default EntryAddUpdate;