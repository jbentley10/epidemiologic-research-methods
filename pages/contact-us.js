/**
 * @file contact-us.js
 */

// Import dependencies
import { React, useState } from "react";
import Head from "next/head";
import { ThemeProvider, TextField, Typography, Button } from "@mui/material";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { styled } from '@mui/material/styles';

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
  '& label.Mui-focused': {
    color: '#0072bc',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0072bc',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#0072bc',
    },
  },
});

export default function ContactUs(props) {
  const [email, setValue] = useState("Controlled");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    // validate the email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleSubmit = (event) => {
    console.log("submitted");
    setValue(event.target.value);
  };

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
        <CssTextField
          id="outlined-basic"
          label="Full Name"
        />
        <CssTextField
          id="outlined-basic"
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Invalid email address" : false}
          label="Email"
          variant="outlined"
        />
        <CssTextField id="outlined-basic" label="Subject" variant="outlined" />
        <CssTextField
          id="outlined-basic"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button
          onClick={handleSubmit}
          variant={`contained`}
          color={`secondary`}
        >
          Submit
        </Button>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const contactUsResponse = await fetchContactUs();

  if (contactUsResponse.fields) {
    return {
      props: {
        heading: contactUsResponse.fields.heading,
        description: contactUsResponse.fields.description,
      },
    };
  }
}
