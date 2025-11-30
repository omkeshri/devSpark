import { setCookie } from "cookies-next";
import AuthService from "@/services/auth/auth.service";

const ExchangeCode = async (req: any, res: any) => {
    const { code } = req.query;
    try {
        const authService = new AuthService();
        const response = await authService.GoogleSignIn({ code: code });
        const { sessionToken, expiresIn } = response;

        setCookie("session_token", sessionToken, {
            req,
            res,
            maxAge: expiresIn,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        }); 

        res.redirect('http://localhost:3000/auth/login')
    } catch (err) {
        console.log(err);
    }
};

export default ExchangeCode;