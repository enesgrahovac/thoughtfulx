import React from "react";
import styles from "./TextArea.module.css";
import classNames from "classnames";

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    placeholder?: string;
    didUpdateText?: (text: string) => void;
}

const TextArea = ({
    className,
    label,
    placeholder,
    didUpdateText,
    ...rest
}: TextAreaProps) => {
    const [text, setText] = React.useState("");

    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <textarea
                placeholder={placeholder}
                className={classNames(className, styles.input)}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    if (didUpdateText) {
                        didUpdateText(e.target.value);
                    }
                }}
                {...rest}
            />
        </div>
    );
};

export default TextArea;
