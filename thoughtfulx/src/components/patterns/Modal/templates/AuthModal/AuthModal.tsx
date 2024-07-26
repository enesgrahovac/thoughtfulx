// AuthModal.tsx
import React, { useState, useEffect } from "react";
import Modal, { ModalProps } from "../../Modal";
import styles from "./AuthModal.module.css";
import classNames from "classnames";
import Button from "@/components/patterns/Button/Button";
import Image from "next/image";
// import google from "@/public/img/google.png";
import xTwitter from "@/public/img/x-twitter.png";
import {handleLogin} from "@/utils/auth";
export interface AuthModalProps extends ModalProps {
  onAuthSuccess?: () => void;
}

const AuthModal = ({
  className,
  onAuthSuccess,
  hideModal,
  ...rest
}: AuthModalProps) => {
  
  const [login, setLogin] = useState(false);
  const [titleText, setTitleText] = useState("Register for ThoughtfulX");
  const [preLinkText, setPreLinkText] = useState("Have an account?");
  const [linkText, setLinkText] = useState("Sign in instead");
  const [labelText, setLabelText] = useState("Register with Google");
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (login === true) {
        setTitleText("Log in to ThoughtfulX")
        setPreLinkText("Don't have an account?")
        setLinkText("Sign up instead")
        setLabelText("Log in with X (Twitter)")
    } else {
        setTitleText("Register for ThoughtfulX")
        setPreLinkText("Have an account?")
        setLinkText("Sign in instead")
        setLabelText("Register with X (Twitter)")

    }
}, [login])

  return (
    <Modal
      title={titleText}
      hideModal={hideModal}
      {...rest}
    >
      <div className={classNames(className, styles.container)}>
        <p className={styles.signInText}>
          {preLinkText}{" "}
          <a href="#" onClick={(e) => {
              e.preventDefault();
              setLogin(!login);
          }}>
            {linkText}
          </a>.
        </p>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        <Button
          variant="primary"
          label={labelText}
          disabled={isAuthenticating}
          icon={
            <div className={styles.iconWrapper}>
                                    <Image alt="X (Twitter) icon" src={xTwitter} width={16} height={16} />
                                </div>
          }
          className={styles.button}
          onClick={handleLogin}
        />
      </div>
    </Modal>
  );
};

export default AuthModal;