import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";
import { alpha } from '@material-ui/core/styles'
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [doBy, setdoBy] = useState(new Date());

  const handleDateChange = (date) => {
    setdoBy(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text, doBy) {
        console.log({text, doBy})
      dispatch(addTodo({text, doBy}));
      setText("");
    }
  };

  return (
    <form className="addTodo" onSubmit={handleSubmit}>
      <input
        className="addTodo__input"
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        placeholder="What do you need to do?"
      />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="dialog"
          minDate={new Date()}
          format="DD/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="TODO date"
          value={doBy}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardTimePicker
          ampm={false}
          margin="normal"
          id="time-picker"
          label="TODO time"
          value={doBy}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </MuiPickersUtilsProvider>
      <button className="addTodo__btn" type="submit">
        Add
      </button>
    </form>
  );
};
