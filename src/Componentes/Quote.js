




const Quote = ({quote}) => {
    const {text, author} = quote;
    return (
        <p>
         {text} <br />
         <span>- {author}</span>
        </p>
    );
}

export default Quote;