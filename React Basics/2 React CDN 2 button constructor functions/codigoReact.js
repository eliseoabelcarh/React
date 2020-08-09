'use strict'

const e = React.createElement;
const d = React.createElement;



class Boton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            text:'texto inicial',
            buttonText: 'initialState',
            btnpressed: false,
        };
    }

    handleState = () => {
        if(this.state.btnpressed){
            return (
                this.setState(
                    {
                        ...this.state,
                        btnpressed: false,
                        buttonText: 'volver a presionar'
                    }
                )
            )
        }else{
            return (
                this.setState({
                    ...this.state,
                    btnpressed:true,
                    buttonText: 'presionado'
                })
            )
        }
    }

    handleClick = () => {
        this.handleState()
        
    }

    render(){
        const buttonText = this.state.buttonText;
        return (
            e(
                   'button', 
                   {onClick: this.handleClick } ,
                    buttonText
            )     
        )
    }
}

class Texto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            texto: 'hazme click, estado inicial'
        }
    }

    clickear = () => {
        console.log(Boton.state)
        return(
            this.setState({
                ...this.state,
                texto: 'estado común'
            })
        )
    }
    render(){
        const textoMostrado = this.state.texto;
        return(
            d(
                'div', 
                {onClick:  this.clickear  } ,
                 textoMostrado
         )
        )
    }
}

const contenedor = document.getElementById('contenedorReact');

const contenedor2  = document.getElementById('mostrarTextoReact');

ReactDOM.render(e(Boton), contenedor);
ReactDOM.render(d(Texto), contenedor2);