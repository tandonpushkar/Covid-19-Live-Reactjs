import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
export default class ComboBox extends React.Component {
  state = {
    text: ""
  };

  onTagsChange = (event, values) => {
    this.setState({ text: values });
  };

  onSubmit = () => {
    this.props.searchStates(this.state.text);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 50
        }}
      >
        <Autocomplete
          id="combo-box-demo"
          options={IndianStates}
          getOptionLabel={option => option}
          style={{ width: 300 }}
          onChange={this.onTagsChange}
          renderInput={params => (
            <TextField
              {...params}
              label="Select Your State"
              variant="outlined"
            />
          )}
        />
        <Button onClick={this.onSubmit} variant="contained" color="primary">
          Show
        </Button>
      </div>
    );
  }
}

const IndianStates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Mizoram",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal"
];
