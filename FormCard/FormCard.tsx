import React from 'react';

interface FormCardStyles {
    title?: React.CSSProperties;
    form?: React.CSSProperties;
    card?: React.CSSProperties;
    label?: React.CSSProperties;
    inputContainer?: React.CSSProperties;
    submitButton?: React.CSSProperties;
}

interface FormCardInput {
    label: React.ReactNode;
    input: React.ReactNode;
}

interface FormValues {
    [key: string]: any;
}

interface FormCardProps {
    title?: string;
    inputs: FormCardInput[];
    styles?: FormCardStyles;
    submitButtonText?: string;
    onSubmit: (data: FormValues) => void;
}

const defaultStyles: FormCardStyles = {
    title: {
        marginBottom: "20px",
        marginTop: 0
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
        alignSelf: "flex-start"
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

const FormCard = ({ title, inputs, styles = defaultStyles, submitButtonText = "Submit", onSubmit }: FormCardProps) => {
    styles = {...defaultStyles, ...styles}; // Override default styles with provided styles

    const handleSubmit = (e: any) => {
        e.preventDefault();

        let values: FormValues = {};
        inputs.forEach((item: any) => {
            console.log(item);
        });

        onSubmit(values);
    }

    return (
        <div style={styles.card}>
            {title &&
                <h2 style={styles.title}>{title}</h2>
            }
            <form onSubmit={handleSubmit} style={styles.form}>
                {
                    inputs.map((item, index) => {
                        return (
                            <div style={styles.inputContainer} key={index}>
                                {item.label}
                                {item.input}
                            </div>
                        )
                    })
                }
                <button type='submit' style={styles.submitButton}>{submitButtonText}</button>
            </form>
        </div>
    );
}

export default FormCard;