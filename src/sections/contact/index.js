import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { withStyles, useTheme } from '@material-ui/styles';
import {
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

// My Components
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';

const styles = theme => ({
  intro: {
    paddingBottom: '25px',
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(6))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3,
    )}px`,
  },
  avatar: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  success: {
    backgroundColor: theme.palette.secondary.main,
  },
  error: {
    backgroundColor: theme.palette.error.main,
  },
  icon: {
    marginRight: '10px',
    fontSize: '20px',
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
};

const encode = data => Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = (props) => {
  const { classes } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...{ name, email, message },
      }),
    })
      .then(() => {
        setSuccess(true);
        setOpen(true);
      })
      .catch((error) => {
        setSuccess(false);
        setOpen(true);
        console.log(error);
      });

    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  const Submit = () => (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Submit
    </Button>
  );

  const CustomSnackbar = ({ variant, msg, openBool }) => {
    const Icon = variantIcon[variant];
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openBool}
        variant={variant}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      >
        <SnackbarContent
          className={classes[variant]}
          message={(
<span id="message-id" className={classes.message}>
              <Icon className={classes.icon} />
              {msg}
            </span>
)}
        />
      </Snackbar>
    );
  };

  const SnackbarSuccess = () => (
    <CustomSnackbar
      variant="success"
      msg="Thank you for your submission. We will be in touch."
      openBool={open && success}
    />
  );

  const SnackbarError = () => (
    <CustomSnackbar
      variant="error"
      msg={`We are having trouble processing your message. Please email
    us instead.`}
      openBool={open && !success}
    />
  );

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EmailIcon />
        </Avatar>
        <form
          name="contact"
          method="post"
          className={classes.form}
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Dummy input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Name */}
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Your Name</InputLabel>
            <Input
              type="text"
              name="name"
              id="username"
              autoComplete="name"
              // autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormControl>
          {/* Email */}
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              type="email"
              name="email"
              value={email}
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          {/* Message */}
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="message">Message</InputLabel>
            <Input
              type="text"
              id="message"
              name="message"
              multiline
              rows="3"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </FormControl>
          <Submit />
        </form>
      </Paper>
      <SnackbarSuccess />
      <SnackbarError />
    </main>
  );
};

const Contact = ({ classes }) => {
  const theme = useTheme();
  const data = useStaticQuery(
    graphql`
      query {
        contentfulHomePage {
          contact {
            contact
          }
        }
      }
    `,
  );
  const { contact } = data.contentfulHomePage.contact;
  return (
    <Section
      bgColor={theme.palette.background.secondary}
      maxWidth="md"
      color="white"
      name="Contact"
    >
      <SectionTitle color="inherit">Contact Rafi Barash</SectionTitle>
      <Typography paragraph color="inherit" className={classes.intro}>
        {contact}
      </Typography>
      <ContactForm classes={classes} />
    </Section>
  );
};

export default withStyles(styles)(Contact);
