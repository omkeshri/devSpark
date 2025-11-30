export const GOOGLE_AUTH_URL = (clientId: string, redirectUri: string) => {
    return `https://accounts.google.com/o/oauth2/auth?${new URLSearchParams({
        scope: "openid profile email",
        response_type: "code",
        access_type: "offline",
        prompt: "consent",
        state: "state",
        redirect_uri: redirectUri,
        client_id: clientId
    })}`;
}

export const GITHUB_AUTH_URL = (clientId: string, redirectUri: string) => {
    return `https://github.com/login/oauth/authorize?${new URLSearchParams({
        scope: "user email",
        response_type: "code",
        access_type: "offline",
        state: "state",
        redirect_uri: redirectUri,
        client_id: clientId
    })}`;
}