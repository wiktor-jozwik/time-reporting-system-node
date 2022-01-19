import {useHistory} from "react-router-dom";
import {Button} from "antd";

const GoBackButton = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <Button className="button-margin" type="primary" onClick={goBack}>
            Go back
        </Button>
    );
}

export default GoBackButton