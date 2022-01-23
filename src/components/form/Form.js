import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  CardActions,
  TextField,
  Button
} from "@material-ui/core";
import validationsForm from "./validationSchema";
import { withFormik } from "formik";
import * as yup from "yup";
import { addUser } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import store from "../../redux/store";
import { useState } from "react";
import SuccessModal from "../successModal/SuccessModal";

const styles = () => ({
  card: {
    maxWidth: 450,
    marginTop: 60
  },
  container: {
    display: "Flex",
    justifyContent: "center"
  },
  actions: {
    float: "right"
  }
});

const Customform = props => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const {
    classes,
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
  } = props;
  function resetForm() {
    values.userID = "";
    values.name = "";
    values.age = "";
    values.hometown = "";
    values.occupation = ""
  }

  const handleClose = () => {
    setisOpenModal(false);
  };
  const onCLickSubmit = () => {
    console.log("ON CLICK SUBMIT");
    if (validate()) {
      setisOpenModal(true);
    }
  };
  const validate = () => {
    return values.userID !== "" &&
      values.name !== "" &&
      values.age !== "" &&
      values.hometown !== "" &&
      values.occupation !== "";
  }
  return (
    <div className={classes.container}>
      <SuccessModal isOpen={isOpenModal} onClose={handleClose} onClick={resetForm} />
      <form id="create-user-form" onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <TextField
              id="userID"
              label="Mã Người dùng"
              type="text"
              value={values.userID}
              onChange={handleChange}
              helperText={touched.userID ? errors.userID : ""}
              error={touched.userID && Boolean(errors.userID)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="name"
              label="Tên"
              type="text"
              value={values.name}
              onChange={handleChange}
              helperText={touched.name ? errors.name : ""}
              error={touched.name && Boolean(errors.name)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="age"
              label="Tuổi"
              type="text"
              value={values.age}
              onChange={handleChange}
              helperText={touched.age ? errors.age : ""}
              error={touched.age && Boolean(errors.age)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="hometown"
              label="Quê quán"
              type="text"
              value={values.hometown}
              onChange={handleChange}
              helperText={touched.hometown ? errors.hometown : ""}
              error={touched.hometown && Boolean(errors.hometown)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="occupation"
              label="Chức vụ"
              type="text"
              value={values.occupation}
              onChange={handleChange}
              helperText={touched.occupation ? errors.occupation : ""}
              error={touched.occupation && Boolean(errors.occupation)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button type="submit" color="primary" props={props} onClick={onCLickSubmit}>
              SUBMIT
            </Button>
          </CardActions>
        </Card>
      </form>
    </div >
  );
};

const Form = withFormik({
  mapPropsToValues: ({ userID, name, age, hometown, occupation }) => {
    return {
      userID: userID || "",
      name: name || "",
      age: age || "",
      hometown: hometown || "",
      occupation: occupation || ""
    };
  },

  validationSchema: yup.object().shape(validationsForm),

  handleSubmit: (values, { props }) => {
    console.log("Submit")
    store.dispatch(
      addUser({
        id: uuidv4(),
        userID: values.userID,
        name: values.name,
        age: values.age,
        hometown: values.hometown,
        occupation: values.occupation
      })
    );
  }
})(Customform);

export default withStyles(styles)(Form);
