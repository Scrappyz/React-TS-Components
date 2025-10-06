import React from 'react';

interface FormCardStyles {
    header?: React.CSSProperties;
    form?: React.CSSProperties;
    card?: React.CSSProperties;
    label?: React.CSSProperties;
    inputContainer?: React.CSSProperties;
    submitButton?: React.CSSProperties;
}

interface FormCardInput {
    label?: React.ReactNode;
    input: React.ReactNode;
}

interface FormValues {
    [key: string]: any;
}

interface FormCardProps {
    header?: string;
    footer?: string;
    inputs: FormCardInput[];
    style?: FormCardStyles;
    submitButtonText?: string;
    onSubmit: (data: FormValues) => void;
}

const defaultStyle: FormCardStyles = {
    header: {
        marginBottom: "20px",
        marginTop: 0,
        fontFamily: "Arial, sans-serif"
    },
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
        width: "250px",
        height: "auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 8px 8px rgba(0, 0, 0, 0.1)",
        // backgroundColor: "blue"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    label: {
        alignSelf: "flex-start",
        marginBottom: "2px",
        fontFamily: "Arial, sans-serif"
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
        width: "80%"
    },
    submitButton: {
        marginTop: "10px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        padding: "5px 10px 5px 10px",
        borderRadius: "5px",
        cursor: "pointer"
    }
}

// Notes:
// `input` fields needs to have `name` attribute for form submission to work
const FormCard = ({ header, footer, inputs, style = defaultStyle, submitButtonText = "Submit", onSubmit }: FormCardProps) => {
    style = {...defaultStyle, ...style}; // Override default style with provided style

    const handleSubmit = (e: any) => {
        e.preventDefault();

        let data = new FormData(e.currentTarget);
        let values: FormValues = {};
        data.forEach((value, key) => {
            values[key] = value;
        })

        onSubmit(values);
    }

    inputs.forEach(item => { // Optimize this later
        let newLabel = item.label;
        if(React.isValidElement(item.label)) {
            const prevStyle = (item.label.props.style ?? {}) as React.CSSProperties;
            newLabel = React.cloneElement(item.label, {
                style: {
                    ...defaultStyle.label,
                    ...prevStyle
                }
            });
            item.label = newLabel;
        }
    })

    return (
        <div style={style.card}>
            {header &&
                <h2 style={style.header}>{header}</h2>
            }
            <form onSubmit={handleSubmit} style={style.form}>
                {
                    inputs.map((item, index) => {
                        console.log(item.label);
                        return (
                            <div style={style.inputContainer} key={index}>
                                {item.label}
                                {item.input}
                            </div>
                        )
                    })
                }
                <button type='submit' style={style.submitButton}>{submitButtonText}</button>
            </form>
        </div>
    );
}

export default FormCard;