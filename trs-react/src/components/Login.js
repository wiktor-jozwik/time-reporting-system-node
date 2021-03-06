import Select from "react-select";
import React, {useEffect, useState} from "react";
import UserDataService from "../services/UserService";
import {useHistory} from "react-router-dom";
import {Button} from "antd";


const Login = () => {
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState()
    const history = useHistory()

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        UserDataService.getAll()
            .then(response => {
                const users = response.data
                    .map(user => {
                        return {
                            value: user.id,
                            label: `${user.firstName} ${user.lastName}`
                        }
                    })

                setUsers(users);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const logUser = () => {
        UserDataService.log(userId)
            .then(() => {
                setTimeout(() => {  history.push("/entries") }, 30);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="code">Log user</label>

                    <Select
                        onChange={(event) => setUserId(event.value)}
                        options={users}
                    />
                    {
                        <input
                            tabIndex={-1}
                            autoComplete="off"
                            style={{opacity: 0, height: 0}}
                            value={userId}
                            required
                        />
                    }

                </div>

                <Button type="primary" onClick={() => logUser()}>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Login