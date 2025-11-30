import AuthService from "@/services/auth/auth.service";
import { useRouter } from "next/router";
import { createContext, useEffect, useMemo, useState } from "react";

interface User {
    name: string;
    role: 'admin' | 'client' | 'moderator' | string;
}


interface UserContextType {
    user?: User | null;
    isLoading: boolean;
    refetchUser: () => Promise<void>;
}

export const UserContext = createContext<any>({
    isLoading: false,
    refetchUser: async () => { },
});


export const UserProvider = ({ children }: any) => {

    const router = useRouter();
    const authService = useMemo(() => new AuthService(), []);

    const [user, setUser] = useState<Record<string, any>>({})

    const logOut = async () => {
        try {
            await authService.LogOut();
        } catch (err) {
            console.log(err)
        } finally {
            router.push('/auth/login');
        }
    }

    const fetchUser = async () => {
        try {
            const res = await authService.VerifyUser();
            
            setUser({ email: res?.email });
        } catch (error) {
            await logOut();
        } finally {

        }
    }


    useEffect(() => {
        fetchUser()
    }, []);

    const value = { user };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}