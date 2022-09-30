import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { FormTitle } from './components/FormTitle'
import {
  CheckoutContainer,
  OptionalInput,
  FormContainer,
  LargerInput,
  OrderDetailsCheckout,
  MediumInput,
  AddressContainer,
  SmallInput,
  PaymentMethodContainer,
  PaymentList,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="">
        <h2>Complete seu pedido</h2>
        <FormContainer>
          <AddressContainer>
            <FormTitle
              title="Endereço de Entrega"
              description="Informe o endereço onde deseja receber seu pedido"
              icon={<MapPinLine size={22} />}
              iconColor="yellow-700"
            />
            <MediumInput placeholder="CEP" />
            <LargerInput placeholder="Rua" />
            <div>
              <MediumInput type="number" placeholder="Número" />
              <OptionalInput>
                <LargerInput placeholder="Complemento" />
              </OptionalInput>
            </div>
            <div>
              <MediumInput placeholder="Bairro" />
              <LargerInput placeholder="Cidade" />
              <SmallInput placeholder="UF" />
            </div>
          </AddressContainer>

          <PaymentMethodContainer>
            <FormTitle
              title="Pagamento"
              description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={<CurrencyDollar size={22} />}
              iconColor="purple-500"
            />
            <PaymentList>
              <li>
                <input type="radio" name="payment" id="creditCard" />
                <label htmlFor="creditCard">
                  <CreditCard size={16} />
                  Cartão de crédito
                </label>
              </li>

              <li>
                <input type="radio" name="payment" id="debitCard" />
                <label htmlFor="debitCard">
                  <Bank size={16} />
                  Cartão de débito
                </label>
              </li>

              <li>
                <input type="radio" name="payment" id="money" />
                <label htmlFor="money">
                  <Money size={16} />
                  Dinheiro
                </label>
              </li>
            </PaymentList>
          </PaymentMethodContainer>
        </FormContainer>
      </form>
      <OrderDetailsCheckout>
        <h2>Cafés selecionados</h2>
      </OrderDetailsCheckout>
    </CheckoutContainer>
  )
}
