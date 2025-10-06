interface CardStyles {
    card?: React.CSSProperties;
    header?: React.CSSProperties;
    footer?: React.CSSProperties;
}

interface CardProps {
    header?: string;
    footer?: string;
    children?: React.ReactNode;
    style?: CardStyles;
}

const defaultStyle: CardStyles = {
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
    }
}

const Card = ({ header, footer, style = defaultStyle, children }: CardProps) => {
    return (
        <div style={style.card}>
            {header && <h2 style={style.header}>{header}</h2>}
            {children}
            {footer && <h4 style={style.footer}>{footer}</h4>}
        </div>
    );
}

export default Card;