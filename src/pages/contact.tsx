import CustomerLayout from "components/layouts/Customer";
import Contact from "components/modules/Customer/Contact";
import Head from "next/head";
import React from "react";

const _Contact: React.FC & { layout: typeof CustomerLayout } = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Contact />
    </>
  );
};

_Contact.layout = CustomerLayout;

export default _Contact;
