import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSW } from "../Store/SW/actions";
import {
  selectSW,
  selectSWError,
  selectSWLoading,
} from "../Store/SW/selectors";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./SW.css";

function Gists() {
  const dispatch = useDispatch();
  const swPersons = useSelector(selectSW);
  const error = useSelector(selectSWError);
  const request = useSelector(selectSWLoading);

  const requestSW = () => {
    dispatch(getAllSW());
  };

  useEffect(() => {
    requestSW();
  }, []);

  const renderSW = useCallback(
    (persons) => <li key={persons.name}>{persons.name}</li>,
    []
  );

  if (request === 1) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestSW}>Retry</button>
      </>
    );
  }

  return <ul className="gists-list">{swPersons.map(renderSW)}</ul>;
}

export default Gists;
