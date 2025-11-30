import * as Yup from 'yup';
import { useMemo } from 'react';
import { useFormik } from 'formik';
import { useRouter } from "next/router";
import AuthService from '@/services/auth/auth.service';
import AuthForm from '@/modules/auth/components/auth-form';
import environment from '@/common/environments';
import { GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from '@/common/constants';

const AuthContainer = () => {
    const router = useRouter();
    const { tab } = router.query;

    const authService = useMemo(() => new AuthService(), []);

    const authFormik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            fullName: tab === "signup"
                ? Yup.string().required("Full name is required")
                : Yup.string(),

            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),

            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),

            confirmPassword: tab === "signup"
                ? Yup.string()
                    .oneOf([Yup.ref("password")], "Passwords must match")
                    .required("Confirm password is required")
                : Yup.string(),
        }),
        onSubmit: () => {
            tab === 'login' ? handleLogin() : handleSignup();
        }
    },
    )

    const handleChange = async (field: string, value: string) => {
        await authFormik.setFieldTouched(field, false);
        await authFormik.setFieldValue(field, value)
    }

    const handleBlur = async (field: string) => {
        await authFormik.setFieldTouched(field, true);
    };

    const handleTabChange = async () => {
        await authFormik.setValues(authFormik.initialValues);
        await authFormik.setErrors({});
        await authFormik.setTouched({});
    }

    const handleSignup = async () => {
        try {
            const res = await authService.SignupUser({
                firstName: authFormik.values.fullName?.split(' ')[0],
                lastName: authFormik.values.fullName?.split(' ')[1],
                emailId: authFormik.values.email,
                password: authFormik.values.password
            })

            router.push('/info');
        } catch (err) {
            console.log(err)
        } finally {

        }
    }

    const handleLogin = async () => {
        try {
            const res = await authService.LoginUser({
                emailId: authFormik.values.email,
                password: authFormik.values.password
            })

            // router.push('/')
        } catch (err) {
            console.log(err)
        } finally {

        }
    }

    const onGoogleClick = async () => {
        try {
            const clientId = environment.GOOGLE_AUTH_CLIENT_ID || '';
            const redirectUri = environment.GOOGLE_AUTH_REDIRECT_URI || '';

            const redirectUrl = GOOGLE_AUTH_URL(clientId, redirectUri);

            window.location.assign(redirectUrl);
        } catch (err) {
            console.log(err)
        }
    }

    const onGithubClick = async () => {
        try {
            const clientId = environment.GITHUB_AUTH_CLIENT_ID || '';
            const redirectUri = environment.GITHUB_AUTH_REDIRECT_URI || '';

            const redirectUrl = GITHUB_AUTH_URL(clientId, redirectUri);

            window.location.assign(redirectUrl);
        } catch (err) {

        }
    }

    return (
        <AuthForm
            tab={tab}
            authFormik={authFormik}
            onChange={handleChange}
            onBlur={handleBlur}
            onSubmit={() => authFormik.handleSubmit()}
            onTabChange={handleTabChange}
            onGoogleClick={onGoogleClick}
            onGithubClick={onGithubClick}
        />
    )
}

export default AuthContainer;