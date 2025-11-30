import api from "@/services/network/axiosInterceptor";

export default class AuthService {
    async LoginUser(payload: any) {
        const { emailId, password } = payload;
        try {
            const response = await api.post('/login', {
                emailId,
                password
            })

            return response.data;
        } catch (err) {
            throw err;
        }
    }

    async SignupUser(payload: any) {
        const { firstName, lastName, emailId, password } = payload;
        try {
            const response = await api.post('/signup', {
                firstName,
                lastName,
                emailId,
                password
            })

            return response.data;
        } catch (err) {
            throw err;
        }
    }

    async ForgotPassword(payload: any) {
        try {

        } catch (error) {

        }
    }

    async GoogleSignIn(payload: any) {
        try {
            const res = await api.post('/login/google', payload);
            return res?.data;
        } catch (error) {
            throw error;
        }
    }

    async GithubSignIn(payload: any) {
        try {
            const res = await api.post('/login/github', payload);
            return res?.data;
        } catch (error) {
            throw error;
        }
    }

    async VerifyUser() {
        try {
            const res = await api.get('/verify');
            return res?.data;
        } catch (err) {
            throw err;
        }
    }

    async LogOut() {
        try {
            const res = await api.get('/logout');
            return res?.data;
        } catch (err) {
            throw err;
        }
    }
}