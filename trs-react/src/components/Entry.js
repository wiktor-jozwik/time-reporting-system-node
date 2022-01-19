import React, {useEffect, useState} from "react";
import EntryDataService from "../services/EntryService";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import moment from "moment";
import {Link} from "react-router-dom";

const Entry = (props) => {
    const [entry, setEntry] = useState()
    const id = props.match.params.id


    useEffect(() => {
        fetchEntry();
    }, []);

    const fetchEntry = () => {
        EntryDataService.get(id)
            .then(response => {
                setEntry(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {entry && (
                <div>
                    <h1 className="header">Details of entry with id: {id}</h1>
                    <div>
                        <p className="entry-details"><span>Date:</span> {moment(entry.date).format('YYYY-MM-DD')}</p>
                        <p className="entry-details"><span>Activity Code:</span> {entry.activity && entry.activity.code}</p>
                        <p className="entry-details"><span>Subcode:</span> {entry.subCode}</p>
                        <p className="entry-details"><span>Time:</span> {entry.time}</p>
                        <p className="entry-details"><span>Description:</span> {entry.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Entry