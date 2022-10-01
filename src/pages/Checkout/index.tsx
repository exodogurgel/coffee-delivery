import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { ItemCart } from './components/ItemCart'
import {
  CheckoutContainer,
  OrderDetailsCheckout,
  OrderConfirm,
  TotalWrapper,
  ItemsListContainer,
} from './styles'
import { Form } from './components/CheckoutForm/Form'

const AddressConfirmValidationSchema = zod.object({
  cep: zod.number().min(100000, 'Informe o cep corretamente'),
  city: zod.string().min(1, 'Informe a cidade'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  number: zod.number().min(1, 'Informe o numero da casa'),
  payment: zod.string().min(1, 'Informe o método de pagamento'),
  road: zod.string().min(1, 'Informe o nome da rua'),
  uf: zod.string().min(1, 'Informe'),
})

type AddressConfirmFormData = zod.infer<typeof AddressConfirmValidationSchema>

export function Checkout() {
  const addressConfirmForm = useForm<AddressConfirmFormData>({
    resolver: zodResolver(AddressConfirmValidationSchema),
  })

  const { handleSubmit, reset } = addressConfirmForm

  function handleAddressConfirmation(data: AddressConfirmFormData) {
    console.log(data)
    reset()
  }

  return (
    <CheckoutContainer>
      <form
        onSubmit={handleSubmit(handleAddressConfirmation)}
        action=""
        id="address-form"
      >
        <h2>Complete seu pedido</h2>
        <FormProvider {...addressConfirmForm}>
          <Form />
        </FormProvider>
      </form>
      <OrderDetailsCheckout>
        <h2>Cafés selecionados</h2>
        <OrderConfirm>
          <ItemsListContainer>
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
          </ItemsListContainer>
          <TotalWrapper>
            <div>
              <small>Total de itens</small>
              <span>R$ 19,80</span>
            </div>
            <div>
              <small>Entrega</small>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 23,30</strong>
            </div>

            <button type="submit" form="address-form">
              Confirmar Pedido
            </button>
          </TotalWrapper>
        </OrderConfirm>
      </OrderDetailsCheckout>
    </CheckoutContainer>
  )
}
