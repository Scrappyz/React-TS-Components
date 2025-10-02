import React from 'react';

interface FormProps {
    inputs: React.ReactNode[];
    styles?: React.CSSProperties;
}

const Form = ({ inputs, styles }: FormProps) => {
    return (
        <form>
            {
                inputs.map(())
            }
        </form>
    );
}