import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function ContactForm() {
  const sendEmail = (values, { resetForm }) => {
    emailjs
      .send("service_g7asxna", "template_erqh00y", values, "6f7ZZ4_FffvPzqIzY")
      .then(
        () => {
          toast.success("Message sent successfully!");
          resetForm();
        },
        (error) => {
          toast.error("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-8 bg-[#fff5dd] max-w-6xl mx-auto rounded-xl shadow-md">
      {/* Contact Form */}
      <div className="w-full md:w-1/2">
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
            <Form className="space-y-4">
              <Field
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg bg-white text-black placeholder-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <Field
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg bg-white text-black placeholder-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <Field
                as="textarea"
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg h-40 bg-white text-black placeholder-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all disabled:bg-blue-300"
                >
                  Send Message
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center space-y-4 text-gray-700">
        <h2 className="text-2xl font-semibold">Contact Info</h2>
        <p className="text-lg">
          📧{" "}
          <a
            href="mailto:antoncarino.work@gmail.com"
            className="text-blue-600 hover:underline"
          >
            antoncarino.work@gmail.com
          </a>
        </p>
        <p className="text-lg">
          📱{" "}
          <a href="tel:+639608722694" className="text-blue-600 hover:underline">
            +63 960 872 2694
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
