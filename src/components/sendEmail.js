import emailjs from "@emailjs/browser";

export const sendEmail = (formData) => {
  return emailjs.send(
    "service_vzsh2jb",
    "template_gw3t8bz",
    formData,
    "dn8prU4ABxO_tGhL5"
  );
};