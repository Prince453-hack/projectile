"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Formik, Form, Field } from "formik";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useSession, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Contact = () => {
  const { session } = useSession();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useUser();

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    const mailtoLink = `mailto:thesecureleap@gmail.com?subject=Contact Request&body=Name: ${encodeURIComponent(
      values.name
    )}%0AEmail: ${encodeURIComponent(
      values.email
    )}%0ACountry: ${encodeURIComponent(
      values.country
    )}%0APhone: ${encodeURIComponent(
      values.phone
    )}%0AAddress: ${encodeURIComponent(
      values.address
    )}%0AEducation: ${encodeURIComponent(
      values.education
    )}%0AQuery: ${encodeURIComponent(values.query)}`;

    window.location.href = mailtoLink;
    setSubmitting(false);
  };

  if (!session) {
    return (
      <div className="fixed bottom-3 right-3 z-50">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-2 shadow-xl"
              onClick={handleDialogOpen}
            >
              Connect Us
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white p-4">
            <DialogHeader>
              <DialogTitle className="font-semibold text-center text-black">
                Sign Up to Connect Us
              </DialogTitle>
              <Link href="/sign-up">
                <DialogDescription
                  className="text-center text-white bg-purple-700 mt-7 rounded-md px-2 py-2 hover:bg-purple-600"
                  onClick={handleDialogClose}
                >
                  Sign Up
                </DialogDescription>
              </Link>
              <Link href="/sign-in" className="mt-2">
                <DialogDescription
                  className="text-center text-black bg-zinc-200 mt-2 rounded-md px-2 py-2 hover:bg-zinc-300"
                  onClick={handleDialogClose}
                >
                  Sign In
                </DialogDescription>
              </Link>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="fixed bottom-3 right-3 z-50">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-2 shadow-xl"
            onClick={handleDialogOpen}
          >
            Connect Us
          </button>
        </DialogTrigger>
        <DialogContent className="bg-white p-4">
          <DialogHeader>
            <DialogTitle className="font-semibold text-center text-black">
              Reach Out to Us
            </DialogTitle>
            <DialogDescription className="text-center text-black">
              Fill in your details and we will get back to you.
            </DialogDescription>
          </DialogHeader>
          <Formik
            initialValues={{
              name: user?.fullName || "Name",
              email: user?.emailAddresses || "",
              country: "",
              phone: user?.phoneNumbers || "",
              address: "",
              education: "",
              experience: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4 flex items-center justify-center flex-col">
                <Field name="name">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Name"
                      className="w-full p-2 rounded-md"
                      required
                    />
                  )}
                </Field>
                <Field name="email">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className="w-full p-2 rounded-md"
                      required
                    />
                  )}
                </Field>
                <Field name="country">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Country"
                      className="w-full p-2 rounded-md"
                    />
                  )}
                </Field>
                <Field name="phone">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Phone No"
                      className="w-full p-2 rounded-md"
                      required
                    />
                  )}
                </Field>
                <Field name="address">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Address"
                      className="w-full p-2 rounded-md"
                    />
                  )}
                </Field>
                <Field name="education">
                  {({ field }: any) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Education Qualification"
                      className="w-full p-2 rounded-md"
                      required
                    />
                  )}
                </Field>
                <Field name="query">
                  {({ field }: any) => (
                    <Textarea
                      {...field}
                      type="text"
                      placeholder="Write Us"
                      className="w-full p-2 rounded-md"
                      required
                    />
                  )}
                </Field>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-center"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
