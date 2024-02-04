import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useId } from "react";

const ContactForm = ({ handleSubmit }) => {
  const userNameId = useId();
  const userPhoneId = useId();

  const initialValues = {
    username: "",
    userphone: "",
  };

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    userphone: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div className="ContactForm">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div>
            <label className={css.label} htmlFor={userNameId}>
              Імя
            </label>
            <Field
              className={css.field}
              type="text"
              id={userNameId}
              name="username"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="username"
              component="span"
            />
          </div>
          <div>
            <label className={css.label} htmlFor={userPhoneId}>
              Номер телефону
            </label>
            <Field
              className={css.field}
              type="text"
              id={userPhoneId}
              name="userphone"
            />

            <ErrorMessage
              className={css.errorMessage}
              name="userphone"
              component="span"
            />
          </div>

          <button className={css.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
