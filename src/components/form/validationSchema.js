import * as yup from "yup";

const validationsForm = {
  userID: yup.string().required("Hãy nhập mã người dùng"),
  name: yup.string().required("Hãy nhập tên"),
  age: yup.string().required("Hãy nhập tuổi"),
  hometown: yup.string().required("Hãy nhập quê quán"),
  occupation: yup.string().required("Hãy nhập chức vụ")
};

export default validationsForm;
