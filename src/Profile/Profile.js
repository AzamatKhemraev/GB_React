import { useCallback } from "react";
// import { store } from "../Store/Store";
import { toggleShowName } from "../Store/Profile/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Profile({ match }) {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();
  const setShowName = useCallback(() => {
    dispatch(toggleShowName);
  }, [dispatch]);

  return (
    <div>
      <h1>Profile</h1>
      <label>
        <input
          type="checkbox"
          checked={showName}
          value={showName}
          onChange={setShowName}
        />
        <span>Show name</span>
      </label>
      {showName && <h2>{name}</h2>}
    </div>
  );
}
