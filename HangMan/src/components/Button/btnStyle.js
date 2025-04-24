const btnStyle = (style) => {
    if(style === 'primary')
        return "bg-blue-500"
    if(style === 'secondary')
        return "bg-gray-500"
    if(style === 'success')
        return "bg-green-500"
    if(style === 'warning')
        return "bg-yellow-500"
    if(style === 'error')
        return "bg-red-500"
}

export default btnStyle