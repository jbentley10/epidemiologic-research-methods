/**
 * @file contact-us.js
 */

// Import dependencies
import { React, useEffect, useState, useRef } from "react";
import Head from "next/head";
import { ThemeProvider, TextField, Typography, Button } from "@mui/material";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { styled } from "@mui/material/styles";
import emailjs from "@emailjs/browser";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import {
  formContainer,
  headingContainer,
} from "../styles/ContactUs.module.scss";

// Import components
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Import assets
import { expertsBackground } from "../styles/Hero.module.scss";

// Import functions
import { fetchContactUs } from "../utils/contentfulData";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#0072bc",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0072bc",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#0072bc",
    },
  },
});

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initialErrorState = {
  nameError: null,
  emailError: null,
};

export default function ContactUs(props) {
  const [errors, setErrors] = useState(initialErrorState);
  const [formState, setFormState] = useState(initialFormState);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef(); // Requried for EmailJS to work

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setFormState({ ...formState, name: event.target.value });
        break;
      case "email":
        setFormState({ ...formState, email: event.target.value });
        break;
      case "subject":
        setFormState({ ...formState, subject: event.target.value });
        break;
      case "message":
        setFormState({ ...formState, message: event.target.value });
        break;
      default:
        break;
    }
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";

    if (!formState.name) {
      nameError = "Name cannot be blank";
    }

    if (!formState.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (emailError || nameError) {
      setErrors({ name: emailError, email: nameError });
      return false;
    }

    setErrors(initialErrorState);
    setIsMessageSent(true);
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validate();
    if (isValid) {
      // Send the email via email.js
      emailjs
        .sendForm(
          props.serviceID,
          props.templateID,
          form.current,
          props.publicKey
        )
        .then(
          (result) => {
            setFormState(initialFormState);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  useEffect(() => {}, [formState]);

  return (
    <ThemeProvider theme={epiTheme}>
      <Head>
        <title>Contact Us | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`Get in touch with us via our contact form.`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero
        isSubhero={true}
        heroText={"Contact Us"}
        heroImage={expertsBackground}
        button={false}
      />
      <div className={formContainer}>
        <div className={headingContainer}>
          <Typography variant={`h2`}>{props.heading}</Typography>
          <div>{documentToReactComponents(props.description)}</div>
        </div>
        {isMessageSent ? (
          <p>Message sent!</p>
        ) : (
          <form ref={form} onSubmit={handleSubmit}>
            <CssTextField
              id="outlined-basic"
              label="Full Name"
              name="name"
              onChange={handleChange}
              value={formState.name}
              error={errors.nameError}
              helperText={errors.name ? errors.name : false}
            />
            <CssTextField
              id="outlined-basic"
              onChange={handleChange}
              name="email"
              value={formState.email}
              error={errors.emailError}
              helperText={errors.email ? errors.email : false}
              label="Email"
              variant="outlined"
            />
            <CssTextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              value={formState.subject}
              name="subject"
              onChange={handleChange}
            />
            <CssTextField
              id="outlined-basic"
              label="Message"
              name="message"
              value={formState.message}
              multiline
              rows={4}
              variant="outlined"
              onChange={handleChange}
            />
            <Button type={"submit"} variant={`contained`} color={`secondary`}>
              Submit
            </Button>
          </form>
        )}
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const contactUsResponse = await fetchContactUs();

  // Get email vars from env vars
  const serviceID = `${process.env.EMAILJS_SERVICE_ID}`;
  const publicKey = `${process.env.EMAILJS_PUBLIC_KEY}`;
  const templateID = `${process.env.EMAILJS_TEMPLATE_ID}`;

  if (contactUsResponse.fields) {
    return {
      props: {
        heading: contactUsResponse.fields.heading,
        description: contactUsResponse.fields.description,
        serviceID: serviceID,
        publicKey: publicKey,
        templateID: templateID,
      },
    };
  }
}
