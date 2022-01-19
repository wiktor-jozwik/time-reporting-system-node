import {useHistory} from "react-router-dom";

const GoBackButton = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <button type="button" onClick={goBack}>
            Go back
        </button>
    );
}

export default GoBackButton