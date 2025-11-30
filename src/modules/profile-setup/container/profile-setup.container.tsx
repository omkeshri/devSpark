import * as Yup from 'yup';
import { useFormik } from "formik";
import ProfileSetupForm from "../components/profile-setup-form"

const ProfileSetupContainer = () => {

    const profileSetupFormik = useFormik({
        initialValues: {
            photoUrl: "",
            age: "",
            gender: "",
            skills: "",
            about: "",
            experience: "",
            company: "",
            role: "",
            location: "",
            hashTag: "",
            social: [
                {
                    provider: "",
                    url: "",
                },
            ],
            employmentHistory: [
                {
                    company: "",
                    role: "",
                    duration: "",
                    description: "",
                },
            ],
        },
        validationSchema: Yup.object({
            photoUrl: Yup.string().url("Invalid URL").nullable(),
            age: Yup.number().min(18, "Age must be at least 18").nullable(),
            gender: Yup.string().oneOf(["male", "female", "other"], "Invalid gender").nullable(),
            skills: Yup.string().nullable(),
            about: Yup.string().nullable(),
            experience: Yup.number().min(0, "Invalid experience").nullable(),
            company: Yup.string().nullable(),
            role: Yup.string().nullable(),
            location: Yup.string().nullable(),
            hashTag: Yup.string().nullable(),
            social: Yup.array().of(
                Yup.object({
                    provider: Yup.string().required("Provider is required"),
                    url: Yup.string().url("Invalid URL").required("URL is required"),
                })
            ),
            employmentHistory: Yup.array().of(
                Yup.object({
                    company: Yup.string().required("Company is required"),
                    role: Yup.string().required("Role is required"),
                    duration: Yup.string().required("Duration is required"),
                    description: Yup.string().required("Description is required"),
                })
            ),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });


    return (
        <ProfileSetupForm profileSetupFormik={profileSetupFormik} />
    )
}

export default ProfileSetupContainer;