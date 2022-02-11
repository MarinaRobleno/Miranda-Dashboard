import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const notifyErrorLogin = () => {
    toast.error('Invalid email or password')
  }

export const notifySuccessLogin = () => {
    toast.success('Successfully logged in!')
  }

export const notifyDelete = () => {
    toast.success('Deleted successfully')
}

export const notifyEdit = () => {
    toast.success('Edited successfully')
}

export const notifyAdd = () => {
    toast.success('Added successfully')
}

export const notifyError = () => {
    toast.error('Woops, there was an error')
}