function SignIn() {
    return (
        <div className="auth__container auth__container--shadows" id="container">
            <div className="auth__form-container auth__form-container--sign-up">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="auth__social-container">
                        <a href="#" className="auth__social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="auth__social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="auth__social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span className="auth__text">or use your email for registration</span>
                    <input type="text" className="auth__input" placeholder="Name" />
                    <input type="email" className="auth__input" placeholder="Email" />
                    <input type="password" className="auth__input" placeholder="Password" />
                    <button className="auth__button">Sign Up</button>
                </form>
            </div>

            <div className="auth__form-container auth__form-container--sign-in">
                <form action="#">
                    <h1 className="auth__title">Sign in</h1>
                    <div className="auth__social-container">
                        <a href="#" className="auth__social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="auth__social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="auth__social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span className="auth__text">or use your account</span>
                    <input type="email" className="auth__input" placeholder="Email" />
                    <input type="password" className="auth__input" placeholder="Password" />
                    <a href="#" className="auth__forgot-password">Forgot your password?</a>
                    <button className="auth__button">Sign In</button>
                </form>
            </div>

            <div className="auth__overlay-container">
                <div className="auth__overlay">
                    <div className="auth__overlay-panel auth__overlay-panel--left">
                        <h1 className="auth__overlay-title">Welcome Back!</h1>
                        <p className="auth__overlay-text">To keep connected with us please login with your personal info</p>
                        <button className="auth__button auth__button--ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="auth__overlay-panel auth__overlay-panel--right">
                        <h1 className="auth__overlay-title">Hello, Friend!</h1>
                        <p className="auth__overlay-text">Enter your personal details and start your journey with us</p>
                        <button className="auth__button auth__button--ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;