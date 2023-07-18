import React, {useRef, useState} from "react";
import {MoonLoader, ScaleLoader} from "react-spinners";



export default function Register() {
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [rePasswordError, setRePasswordError] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [loading, setLoading] = useState(false)
    const isValidRef = useRef(isValid)

    function validate() {
        isValidRef.current = true
        if (!username) {
            isValidRef.current = false
            setUsernameError("لطفا یک نام کاربری معتبر وارد کنید. حداقل ۶ کاراکتر .");
        }

        if (typeof username !== "undefined") {
            const re = /^\S*$/;
            if (username.length < 6 || !re.test(username)) {
                isValidRef.current = false
                setUsernameError("لطفا یک نام کاربری معتبر وارد کنید. حداقل ۶ کاراکتر .");
            }
        }

        if (!email) {
            isValidRef.current = false
            setEmailError("لطفا ایمیل معتبر وارد کنید");
        }

        if (typeof email !== "undefined") {
            const pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(email)) {
                isValidRef.current = false
                setEmailError("لطفا ایمیل معتبر وارد کنید");
            }
        }

        if (!password) {
            isValidRef.current = false
            setPasswordError("پسورد خود را وارد کنید");
        }

        if (!rePassword) {
            isValidRef.current = false
            setRePasswordError("پسورد خود را دوباره وارد کنید");
        }

        if (typeof password !== "undefined") {
            if (password.length < 6) {
                isValidRef.current = false
                setPasswordError("حداقل ۶ کاراکتر");
            }
        }

        if (
            typeof password !== "undefined" &&
            typeof rePassword !== "undefined"
        ) {
            if (password !== rePassword) {
                isValidRef.current = false
                setRePasswordError("پسورد ها یکسان نیستند");
            }
        }

    }

    function register() {
        validate()

        if (isValidRef.current) {
            console.log('start')
            setLoading(true)
        }
    }

    function handleChange(e) {
        const field = e.target.id

        switch (field) {
            case 'username':
                setUsernameError('')
                setUsername(e.target.value)

                break;

            case 'email' :
                setEmailError('')
                setEmail(e.target.value)
                break;
            case 'password':
                setPasswordError('')
                setPassword(e.target.value)
                break;

            case 're-password':
                setRePasswordError('')
                setRePassword(e.target.value)

        }
    }


    return <div className="register-box">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6 text-center">
                    {loading && <ScaleLoader color="#7352C7FF" />}
                    {!loading && <div className="register-form">
                        <div className="input-group mb-2">
                            <label htmlFor="username" className={usernameError && 'label-error'}>نام کاربری</label>
                            <input onChange={(e) => handleChange(e)}
                                   value={username}
                                   type="text"
                                   id="username"
                                   className={usernameError ? 'form-control input-error' : 'form-control'}/>
                            {usernameError && <span className="error-text">{usernameError}</span>}
                        </div>
                        <div className="input-group mb-2">
                            <label htmlFor="email" className={emailError && 'label-error'}>ایمیل</label>
                            <input
                                type="text"
                                id="email"
                                onChange={(e) => handleChange(e)}
                                value={email}
                                className={emailError ? 'form-control input-error' : 'form-control'}/>

                            {emailError && <span className="error-text">{emailError}</span>}
                        </div>
                        <div className="input-group mb-2">
                            <label htmlFor="password" className={passwordError && 'label-error'}>پسورد</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={password}
                                type="text"
                                id="password"
                                className={passwordError ? 'form-control input-error' : 'form-control'}/>

                            {passwordError && <span className="error-text">{passwordError}</span>}
                        </div>
                        <div className="input-group mb-2">
                            <label htmlFor="re-password" className={rePasswordError && 'label-error'}>تکرار
                                پسورد</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={rePassword}
                                type="text"
                                id="re-password"
                                className={rePasswordError ? 'form-control input-error' : 'form-control'}/>
                            {rePasswordError && <span className="error-text">{rePasswordError}</span>}
                        </div>
                        <div>
                            <button onClick={register} className="btn btn-violet">
                                ثبت نام
                            </button>
                        </div>
                    </div>}

                </div>
            </div>
        </div>
    </div>


}