import React from 'react'
import styled from 'styled-components';
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
// import dotenv from 'dotenv';
import { toast } from "react-toastify";
// import { Toast } from 'react-toastify/dist/components';
import "react-toastify/dist/ReactToastify.css";
import { Fade } from 'react-awesome-reveal';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 0;
    align-items: center;
    padding: 2rem 2rem 12rem;
    width: 100%;

    @media (max-width: 768px) {
      padding: 4rem 1.5rem 6rem;
    }
`;

const ContactTitle = styled.div`
   color: ${({ theme }) => theme.text_primary};
   font-size: 2.5rem;
   font-weight: 700;
   margin-top: 20px;
   text-align: center;
   @media (max-width: 468px) {
    font-size: 2rem;
    margin-top: 8px;
   }
`;

const Description = styled.div`
   font-size: 1.3rem;
   color: ${({ theme }) => theme.text_secondary};
   text-align: center;
   @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 8px;
   }
`;

// Form style
const Form = styled.form`
  width: 400px;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 568px) {
    width: 100%;
    max-width: 320px;
  }
`;
const  Label = styled.label`
     display: flex;
     font-size: 1.2rem;
     flex-direction: column;
     color: ${({ theme }) => theme.text_primary};
     gap: 8px;

`;

const Input = styled.input`
   background-color: ${({ theme }) => theme.card_light};
   border-radius: 10px;
   border: none;
   color: white;
   font-size: 14px;
   margin-bottom: 10px;
   padding: 10px 5px;
   border: 1px solid ${({ theme }) => theme.primary};

`;

const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.card_light};
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 14px;
  padding: 10px 5px;
  height: 200px;
  width: 100%;
  resize: none;
  border: 1px solid ${({ theme }) => theme.primary};

`;

const SubmitButton = styled.button`
  border: 1.8px solid ${({ theme }) => theme.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  background: linear-gradient(90deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%);
  margin-top: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 4px 30px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  :hover{
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.text_light};
  }

`;

// Success Modal Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

const ModalCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.3);
  border-radius: 20px;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 420px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(133, 76, 230, 0.2);
  animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @keyframes popIn {
    from { transform: scale(0.7); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
  }
`;

const CheckCircle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #854CE6, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 0 0 12px rgba(133, 76, 230, 0.15);
  animation: pulseMd 1.5s ease-in-out infinite;
  @keyframes pulseMd {
    0%, 100% { box-shadow: 0 0 0 12px rgba(133, 76, 230, 0.15); }
    50%       { box-shadow: 0 0 0 20px rgba(133, 76, 230, 0.05); }
  }
`;

const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
`;

const ModalMessage = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1rem;
  text-align: center;
  margin: 0;
  line-height: 1.6;
`;

const ModalButton = styled.button`
  margin-top: 8px;
  padding: 10px 36px;
  border-radius: 20px;
  border: 1.8px solid ${({ theme }) => theme.primary};
  background: linear-gradient(90deg, rgba(133, 76, 230, 0.2), rgba(133, 76, 230, 0.05));
  color: ${({ theme }) => theme.text_primary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;
export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);


  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

   //Send email process
   const handleSubmit = (e) => {
    e.preventDefault();

    if( form.name === "" || form.email === "" || form.message === ""){
        setLoading(false);
        return toast.error('Please fill all the fields',{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    }

    setLoading(true);

    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "ABDESSAMAD AH",
          from_email: form.email,
          to_email: process.env.REACT_APP_EMAIL_ACCOUNT,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error('Ops, something went wrong. Please try again.', {
            position: "top-center",
            zIndex: 100,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      );
  };


  return (
    <>
      {sent && (
        <ModalOverlay onClick={() => setSent(false)}>
          <ModalCard onClick={e => e.stopPropagation()}>
            <CheckCircle>✓</CheckCircle>
            <ModalTitle>Message Sent!</ModalTitle>
            <ModalMessage>
              Thank you for reaching out! I'll get back to you as soon as possible.
            </ModalMessage>
            <ModalButton onClick={() => setSent(false)}>Awesome, thanks!</ModalButton>
          </ModalCard>
        </ModalOverlay>
      )}
       <ContactContainer id="contact">

              <Fade direction='up' triggerOnce >
              <ContactTitle>Contact</ContactTitle>
              <Description>
                I'm currently looking for new opportunities, use the form below to get in touch with me.
              </Description>
              </Fade>

              <Fade direction='up' triggerOnce>
              <Form
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <Label>
                <span >Your Name</span>
                <Input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                />
              </Label>
              <Label>
                <span className='text-white font-medium mb-4'>Your email</span>
                <Input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email ?"
                />
              </Label>
              <Label>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <Textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What you want to say?'
                />
              </Label>

              <SubmitButton >
                { loading ? "Sending..." : "Send"}
              </SubmitButton>
        </Form>
        </Fade>
        </ContactContainer>
    </>
  );
}
