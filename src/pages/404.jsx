
const initStyles = {
    width: '100%',
    heigth: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: '35px',
    marginTop: '70px'
}

const Error = () => {
    return (
        <div style={initStyles}>
            Page not Found | 404
        </div>
    )
}

export { Error }