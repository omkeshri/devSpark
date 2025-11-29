const jwt = require("jsonwebtoken");

export const createSession = async (id) => {
    const token = await jwt.sign({ id: id }, process.env.JWT_PASSWORD, {
        expiresIn: "1d",
    });

    return token;
}