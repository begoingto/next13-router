'use client'
import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import axios from "axios";
import {API_URL, FILE_SIZE, SUPPORTED_FORMATS} from "@/lib/baseConfig";
import Link from "next/link";
import LoadingIndicator from "@/components/LoadingIndicator ";
import ToastMessage from "@/components/toastMessage";

const validationSchema = Yup.object({
    name: Yup.string().required("The name is required."),
    email: Yup.string().email("The email is not valid.").required("The email is required."),
    password: Yup.string().min(6, "You must be min 6 character").required("The password is required."),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password must match").min(6, "You must be min 6 character").required("The confirm password is required."),
    file: Yup.mixed()
        .test("fileFormat", "Unsupported Format", value => {
            if (!value) {
                return true;
            }
            return SUPPORTED_FORMATS.includes(value.type);
        })
        .test("fileSize", "File too large", value => {
            if (!value) {
                return true;
            }
            return value.size > FILE_SIZE;
        }).required("The avatar is required")
});

export default function Login() {
    const [loadingSubmit,setLoadingSubmit] = useState(false)
    const [success,setSuccess] = useState(false)
    const [messages,setMessages] = useState([])

    const createUser = async (user) => {
        /** let { name, email, password, avatar, role } = user;

        let header = new Headers();
        header.append("Content-Type", "application/json");

        let rawData = JSON.stringify({
            name,
            email,
            password,
            avatar,
            role,
        });
        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: rawData,
        }; **/

        try {
            const res =  await axios.post(`${API_URL}/users`, user)
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    const uploadAvatar = async (values) => {
        try {
            const res = await axios.post(`${API_URL}/files/upload`,values.file);
            return res.data;
        } catch (error) {
            setMessages(messages => [...messages,{type: 'error', msg: "Something went wrong."}])

        }
    }

    const handleRemoveMessage = (i) => {
        console.log(i)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center">

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    avatar: 'https://bit.ly/3Oj0wsQ',
                    role: 'customer',
                    file: undefined
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, {setSubmitting,resetForm}) => {
                    setLoadingSubmit(true)
                    const formData = new FormData();
                    formData.append("file", values.file);
                    const file = await uploadAvatar({file: formData})
                    if (file){
                        values.file = file.location
                        const data = await createUser(values)
                        console.log(data)
                        if (data) {
                            setSuccess(true)
                            setMessages(messages => [...messages,{type: 'success', msg: "User have been created successfully."}])
                            resetForm();
                        }
                        setLoadingSubmit(false)
                    }

                }}
            >

                {({isSubmitting,setFieldValue}) => (<>
                    <div className="absolute top-5 right-1.5 z-10">
                        {messages.map((msg,i) => <ToastMessage key={i} id={i} type={msg.type} message={msg.msg} handleRemove={() => handleRemoveMessage(i)} />)}
                    </div>

                    <LoginForm
                        setFieldValue={setFieldValue}
                        loadingSubmit={loadingSubmit}
                        disabled={isSubmitting}
                        completed={success}
                    />
                </>)}
            </Formik>
        </main>
    );
}

function ActionFile({ field, form, setFieldValue,completed,...props}) {
    const [previewImg, setPreviewImg] = useState(null);
    const [loadingImg, setLoadingImg] = useState(false);


    useEffect(() => {
        if (completed){
            setPreviewImg(null)
        }
    },[completed])

    const handleChangeFile = e => {
        const f = e.currentTarget.files[0]
        setLoadingImg(true)
        form.setFieldValue(field.name, f);
        if (SUPPORTED_FORMATS.includes(f.type)){
            setPreviewImg(URL.createObjectURL(f));
            setLoadingImg(false)
        }
        setTimeout(() => {
            setLoadingImg(false)
        },1000)
    };

    return (
        <>
            <label htmlFor="file" className="flex justify-center hover:cursor-pointer relative">
                {loadingImg ? <LoadingIndicator className="absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2" /> : ''}
                <img className="w-36 h-36 object-cover rounded-full border-2 border-blue-700" src={ previewImg ? previewImg : "https://bit.ly/3IJvVBd"} alt="a large avatar" />
            </label>
            <input
                type="file"
                id="file"
                onChange={handleChangeFile}
                className="hidden"
            />
        </>
    );
}


function LoginForm({disabled, setFieldValue, loadingSubmit, completed}) {
    return (
        <Form className="w-96">

            <Field
                type="file"
                name="file"
                completed={completed}
                setFieldValue={setFieldValue}
                component={ActionFile}
            />
            <ErrorMessage
                name="file"
                component="p"
                className="mt-2 text-sm text-red-600 dark:text-red-500 text-center"/>

            <div className="relative z-0 w-full mb-6 group">
                <Field type="text" name="name" id="floating_name"
                       className="block py-2.5 px-0 w-full text-md text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" "/>
                <label htmlFor="floating_name"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                <ErrorMessage
                    name="name"
                    component="p"
                    className="mt-2 text-sm text-red-600 dark:text-red-500"/>
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <Field type="text" name="email" id="floating_email"
                       className="block py-2.5 px-0 w-full text-md text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" "/>
                <label htmlFor="floating_email"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                <ErrorMessage
                    name="email"
                    component="p"
                    className="mt-2 text-sm text-red-600 dark:text-red-500"/>
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <Field type="password" name="password" id="floating_password"
                       className="block py-2.5 px-0 w-full text-md text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" "/>
                <label htmlFor="floating_password"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                <ErrorMessage
                    name="password"
                    component="p"
                    className="mt-2 text-sm text-red-600 dark:text-red-500"/>
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <Field type="password" name="confirmPassword" id="floating_confirmPassword"
                       className="block py-2.5 px-0 w-full text-md text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" "/>
                <label htmlFor="floating_confirmPassword"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="mt-2 text-sm text-red-600 dark:text-red-500"/>
            </div>


            <div className="flex justify-between items-center">
                <Link href="/" className="block text-yellow-500">
                    <small><i className="bi bi-arrow-return-left"></i> Back Home</small>
                </Link>
                <button
                    type="submit"
                    disabled={disabled}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center gap-2">
                    {loadingSubmit ? <LoadingIndicator width={5} height={5}/> : ''}
                    Submit
                </button>
            </div>
        </Form>
    )
}