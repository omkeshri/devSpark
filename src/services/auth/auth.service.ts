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
}