import './Greetings.css';

export function Greetings({lang, children}) {
    let language = ''
    switch (lang){
        case 'de':
        language = 'Hallo'
        break;
        case 'fr':
        language = 'Bonjour'
        break;
        case 'es':
        language = 'Hola'
        break;
        case 'en':
        language = 'Hello'
        break;
        default:
        break;
    }

    return (

        <div className="greetings">
            <span>{language} {children}</span>
        </div>
    )
    
};