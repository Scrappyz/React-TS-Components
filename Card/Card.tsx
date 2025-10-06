import React from "react";

interface CardStyles {
    card?: React.CSSProperties;
    header?: React.CSSProperties;
    footer?: React.CSSProperties;
}

interface CardProps {
    header?: string;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    style?: CardStyles;
}

const defaultStyle: CardStyles = {
    header: {
        marginBottom: "20px",
        marginTop: 0,
        fontFamily: "Arial, sans-serif"
    },
    footer: { // Modifies the footer container
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "space-around"
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
    }
}

const Card = ({ header, footer, style = defaultStyle, children }: CardProps) => {
    style = { ...defaultStyle, ...style }; // Override default style with provided style

    let newFooter = footer;
    if(React.isValidElement(footer)) {
        const prevStyle = (footer.props.style ?? {}) as React.CSSProperties;
        newFooter = React.cloneElement(footer, { style: { ...defaultStyle.footer, ...prevStyle } });
        footer = newFooter;
    }

    return (
        <div style={style.card}>
            {header && <h2 style={style.header}>{header}</h2>}
            {children}
            {footer}
        </div>
    );
}

export default Card;