import React, {useState, useEffect} from "react";
import EntryDataService from "../services/EntryService";
import {Link} from "react-router-dom";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import moment from "moment";

const EntryList = ({date}) => {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = () => {
        EntryDataService.getAll()
            .then(response => {
                setEntries(response.data.filter(activity => {
                    if (!date) {
                        date = moment()
                    }
                    return moment(activity.date) > date.startOf('day')
                        && moment(activity.date) < date.endOf('day')
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <h1 className="header">Entries for {moment().format('YYYY-MM-DD')}</h1>
            <TableContainer>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Project Code</TableCell>
                            <TableCell align="right">Subcode</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow
                                key={entry.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="right">{moment(entry.date).format('YYYY-MM-DD')}</TableCell>
                                <TableCell align="right">{entry.time} min</TableCell>
                                <TableCell align="right">{entry.activity && entry.activity.code}</TableCell>
                                <TableCell align="right">{entry.subCode}</TableCell>
                                <TableCell align="right">{entry.description}</TableCell>
                                <TableCell align="right">
                                    <Link to={"/entries/details/" + entry.id}>
                                        Details
                                    </Link>

                                    <Link to={"/entries/edit/" + entry.id}>
                                        Edit
                                    </Link>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default EntryList;