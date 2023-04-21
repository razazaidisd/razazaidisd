"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import { ERROR_EMAIL, ERROR_MESSAGE, ERROR_NAME } from "./constants";

const Contact = () => {
  const contactForm = React.useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      setSubmitting(true);
      try {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            values,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(() => {
            setSubmitting(false);
            formik.resetForm();
            toast.success("Email sent successfully!", {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
      } catch {
        setSubmitting(false);
        toast.error("Something went wrong!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
  });

  return (
    <div className="flex items-center justify-center p-12 bg-[#0e2f4b] ">
      <div className="mx-auto w-full max-w-[550px]">
        <h2 className="text-3xl text-slate-50 font-semibold md:text-4xl pb-5">
          Contact me
        </h2>
        <form ref={contactForm} onSubmit={formik.handleSubmit}>
          <div className="mb-5">
            <label
              className="mb-1 block text-base font-medium text-slate-50"
              htmlFor="name"
            >
              First Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
                formik.touched.name && formik.errors.name
                  ? "border border-red-500"
                  : ""
              }`}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-1 block text-base font-medium text-slate-50"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
                formik.touched.email && formik.errors.email
                  ? "border border-red-500"
                  : ""
              }`}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="lastName"
              className="mb-1 block text-base font-medium text-slate-50"
            >
              Message
            </label>
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
                formik.touched.message && formik.errors.message
                  ? "border border-red-500"
                  : ""
              }`}
            />
          </div>
          <button
            type="submit"
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            disabled={submitting}
          >
            Submit
          </button>
        </form>
        {/* <form ref={form} onSubmit={sendEmail}>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-slate-50">
              Name
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </label>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-slate-50">
              Email Address
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </label>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-slate-50">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <button
              type="submit"
              value="Send"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;
