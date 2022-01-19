import React, {useEffect, useState} from "react";
import ActivityDataService from "../services/ActivityService";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const Activities = () => {
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
        <div>
            <h1 className="header">All activities</h1>
            <TableContainer>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Code</TableCell>
                            <TableCell align="right">Budget</TableCell>
                            <TableCell align="right">Active</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {activities.map((activity) => (
                            <TableRow
                                key={activity.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="right">{activity.code}</TableCell>
                                <TableCell align="right">{activity.budget}</TableCell>
                                <TableCell align="right">{activity.active ? 'Active' : 'Not active'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Activities