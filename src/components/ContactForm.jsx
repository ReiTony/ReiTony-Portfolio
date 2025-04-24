import React from 'react';
import { Formik, Form, Field } from "formik";
import { Button } from "@/components/ui/button";
import emailjs from 'emailjs-com';

function ContactForm() {

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .send(
        "service_id",
        "template_id",
        values,
        "user_id"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          resetForm();
        },
        (error) => {
          alert("Failed to Send Message: " + error.text);
        }
      );
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Required";
        if (!values.email) errors.email = "Required";
        if (!values.message) errors.message = "Required";
        return errors;
      }}
      onSubmit={sendEmail}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 w-full max-w-lg">
          <Field
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <Field
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <Field
            as="textarea"
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg h-40 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
