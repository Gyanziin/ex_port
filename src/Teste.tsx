import styled from 'styled-components'

type Botaoprops = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<Botaoprops>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <div>
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo principal>Nao clique aqui</BotaoPerigo>
    </div>
  )
}

export default Teste
