import CustomTabs from "@/components/tabs";
import { Github, Mail } from "lucide-react";
import CustomInput from "@/components/input";
import { AUTH_TABS } from "@/modules/auth/common/constants";

const AuthForm = ({ tab, authFormik, onChange, onBlur, onSubmit, onTabChange }: any) => {
    return (
        <div className="auth-container">
            <div className="auth-wrapper">

                <div className="auth-header">
                    <div className="auth-logo">
                        <span className="auth-logo-icon">{"</>"}</span>
                    </div>
                    <h1 className="auth-title">DevSpark</h1>
                    <p className="auth-subtitle">Connect with developers worldwide</p>
                </div>

                <div className="auth-card">
                    <CustomTabs
                        tabs={AUTH_TABS}
                        className="auth-tabs"
                        onChange={onTabChange}
                    />

                    {tab === 'signup' && (
                        <CustomInput
                            value={authFormik.values.fullName}
                            type="text"
                            placeholder="Name"
                            label="Full Name"
                            onChange={(e: any) => onChange('fullName', e.target.value)}
                            onBlur={() => onBlur('fullName')}
                            error={authFormik.touched.fullName && !!authFormik.errors.fullName}
                            errorMessage={authFormik.errors.fullName}
                            required
                        />
                    )}

                    <CustomInput
                        value={authFormik.values.email}
                        type="email"
                        placeholder="Email"
                        label="Email"
                        onChange={(e: any) => onChange('email', e.target.value)}
                        onBlur={() => onBlur('email')}
                        error={authFormik.touched.email && !!authFormik.errors.email}
                        errorMessage={authFormik.errors.email}
                        required
                    />

                    <CustomInput
                        value={authFormik.values.password}
                        type="password"
                        placeholder="Password"
                        label="Password"
                        onChange={(e: any) => onChange('password', e.target.value)}
                        onBlur={() => onBlur('password')}
                        error={authFormik.touched.password && !!authFormik.errors.password}
                        errorMessage={authFormik.errors.password}
                        required
                    />

                    {tab === 'signup' && (
                        <CustomInput
                            value={authFormik.values.confirmPassword}
                            type="password"
                            placeholder="Confirm Password"
                            label="Confirm Password"
                            onChange={(e: any) => onChange('confirmPassword', e.target.value)}
                            onBlur={() => onBlur('confirmPassword')}
                            error={authFormik.touched.confirmPassword && !!authFormik.errors.confirmPassword}
                            errorMessage={authFormik.errors.confirmPassword}
                            required
                        />
                    )}

                    <button className="auth-primary-btn" type="submit" onClick={onSubmit}>
                        {tab === 'login' ? 'Sign In' : 'Create Account'}
                    </button>

                    {tab === 'login' &&
                        <p className="auth-forgot">Forgot password?</p>
                    }

                    <div className="auth-divider">
                        <div className="auth-divider-line" />
                        <span className="auth-divider-text">Or continue with</span>
                        <div className="auth-divider-line" />
                    </div>

                    <div className="auth-social">
                        <button className="auth-social-btn"><Github /> GitHub</button>
                        <button className="auth-social-btn"><Mail /> Google</button>
                    </div>
                </div>

                {/* <p className="auth-footer">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </p> */}
            </div>
        </div>
    );
};

export default AuthForm;
