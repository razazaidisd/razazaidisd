"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { InlineWidget } from "react-calendly";
import { alegreya } from "../fonts";

interface IContactForm {
  displayContactForm?: boolean;
}

const Contact = ({ displayContactForm }: IContactForm) => {
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
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            values,
            process.env.NEXT_PUBLIC_PUBLIC_KEY!
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
    <div className="bg-white">
      <div className="container m-auto px-6 py-16">
        <div
          className={`grid ${
            displayContactForm ? "md:grid-cols-2" : ""
          } grid-cols-none gap-6`}
        >
          {displayContactForm && (
            <div>
              <h2
                className={`text-3xl text-slate-950 font-semibold md:text-4xl pb-5 ${alegreya.className}`}
              >
                Contact me
              </h2>
              <form ref={contactForm} onSubmit={formik.handleSubmit}>
                <div className="mb-5">
                  <label
                    className="mb-1 block text-base font-medium text-slate-950"
                    htmlFor="name"
                  >
                    Name
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
                    className="mb-1 block text-base font-medium text-slate-950"
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
                    className="mb-1 block text-base font-medium text-slate-950"
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
            </div>
          )}
          <div>
            <h2
              className={`text-3xl text-slate-950 font-semibold md:text-4xl pb-5 ${alegreya.className}`}
            >
              Need Advice?
            </h2>
            <p className="mb-4 block text-base font-medium text-slate-950">
              If I can be of any assistance, feel free to reach me via email for
              free advice.
              <br />
              Or book a 1-to-1 consultancy call
            </p>
            <div className={`${displayContactForm ? "shadow-lg border" : ""}`}>
              <InlineWidget url="https://calendly.com/razazaidisd/30min" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
