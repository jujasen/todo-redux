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
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
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
          value={selectedDate}
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
          value={selectedDate}
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
