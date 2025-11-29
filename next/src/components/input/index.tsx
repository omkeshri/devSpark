import { Input } from "../ui/input"

const CustomInput = ({ value, placeholder, onChange, type, label, error, errorMessage, onBlur, onFocus, required }: any) => {
    return (
        <div className="auth-field">
            <label className="auth-label">{label}{required ? "*" : ""}</label>
            <Input
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {error && <p className="text-xs text-red-600">{errorMessage}</p>}
        </div>
    )
}

export default CustomInput;