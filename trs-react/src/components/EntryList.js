import React, {useState, useEffect, useReducer} from "react";
import EntryDataService from "../services/EntryService";
import {Link, useHistory} from "react-router-dom";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import moment from "moment";

const EntryList = () => {
    const [date, setDate] = useState(moment())

    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetchEntries();
    }, [date]);

    const fetchEntries = () => {
        EntryDataService.getAll()
            .then(response => {
                setEntries(response.data.filter(entry => {
                    return moment(entry.date)
                        .isBetween(
                            moment(date).add(-1, 'day').format('YYYY-MM-DD'),
                            moment(date).format('YYYY-MM-DD'),
                            'days', '(]')
                }));
            })
            .catch(e => {
                console.log(e);
            });
    };

    const goToNextDay = () => {
        setDate(moment(date).add(1, 'days'))
    }

    const goToPreviousDay = () => {
        setDate(moment(date).add(-1, 'days'))
    }

    const handleDelete = (id) => {
        EntryDataService.delete(id)
            .then(() => {
                setEntries(entries.filter(entry => {
                    return entry.id !== id
                }))
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div>
            <h1 className="header">Entries for {moment(date).format('YYYY-MM-DD')}</h1>
            <div>
                <button onClick={goToNextDay}>Next day</button>
                <button onClick={goToPreviousDay}>Previous day</button>
            </div>
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

                                    <button onClick={() => handleDelete(entry.id)}>
                                        Delete
                                    </button>

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