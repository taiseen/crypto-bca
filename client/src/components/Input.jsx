const Input = ({ placeholder, name, type, value, handleChange }) => (

    <input
        type={type}
        step="0.0001"
        value={value}
        placeholder={placeholder}
        onChange={e => handleChange(e, name)}
        className="my-2 w-full rounded-md p-2 outline-none bg-transparent text-white border-1 border-transparent text-sm white-glassMorphism focus:border-blueHover"
    />

)

export default Input