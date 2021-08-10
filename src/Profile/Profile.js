import { useCallback, useState } from "react";
import { changeName } from "../Store/Profile/actions";
import { useDispatch } from "react-redux";

export default function Profile() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setValue(value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!value) {
        return;
      }
      dispatch(changeName(value));
      setValue("");
    },
    [dispatch, value]
  );

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <span>Ente your name</span>
        <input value={value} onChange={handleChange} />
      </form>
    </div>
  );
}
