import PropTypes from 'prop-types'

export function Button({text, name = 'Usuario'}) {
    console.log(text)
    return <button onClick={() => {console.log('Hola Mundo')}}>
        {text} - {name}    
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}