import CustomerLayout from "components/layouts/Customer";
import ForgotPassword from "components/modules/Customer/ForgotPassword";
import React from "react";

const _ForgotPassword: React.FC & { layout: typeof CustomerLayout } = () => {
  return <ForgotPassword />;
};

_ForgotPassword.layout = CustomerLayout;

export default _ForgotPassword;
