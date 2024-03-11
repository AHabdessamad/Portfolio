import React from 'react'
import styled from 'styled-components';
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
// import dotenv from 'dotenv';
import {  toast, Toast, ToastContainer } from "react-toastify";
// import { Toast } from 'react-toastify/dist/components';
import "react-toastify/dist/ReactToastify.css";

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    height: 70rem;
    padding-bottom: 3rem;
`;
const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 14px;

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
  height: 2rem;
  margin-top: 4rem;
  @media (max-width: 568px) {
    width: 300px;
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
const CustomToast = styled.div`
  margin-top: 3rem; 
`;
export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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

    emailjs
      .send(
        'service_bo8p7oe',
        'template_2ejhjr3',
        {
          from_name: form.name,
          to_name: "ABDESSAMAD AH",
          from_email: form.email,
          to_email: "abdessamadaithamou0@gmail.com",
          message: form.message,
        },
        'gJe0G7MZZvRxVdIvj'
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Thank you. I will get back to you soon.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

          setForm({
            name: "",
            email: "",
            message: "",
          });
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
    <div id="contact" >
       <ContactContainer>
              <ContactTitle>Contact</ContactTitle>
              <Description>
                I'm currently looking for new opportunities, use the form below to get in touch with me.
              </Description>
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
        </ContactContainer>
      
    </div>
  );
}
