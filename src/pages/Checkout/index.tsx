import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CheckoutContainer } from './styles'
import { Form } from './components/CheckoutForm/Form'
import { OrderDetailsCheckout } from './components/OrderDetailsCheckout'

const AddressConfirmValidationSchema = zod.object({
  cep: zod.number().min(100000, 'Informe um CEP válido'),
  city: zod.string().min(1, 'Informe a cidade'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  number: zod.number().min(1, 'Informe o numero da casa'),
  payment: zod.string().min(1, 'Informe o método de pagamento'),
  road: zod.string().min(1, 'Informe o nome da rua'),
  uf: zod.string().min(1, 'Informe'),
})

export type AddressConfirmFormData = zod.infer<
  typeof AddressConfirmValidationSchema
>

export function Checkout() {
  const addressConfirmForm = useForm<AddressConfirmFormData>({
    resolver: zodResolver(AddressConfirmValidationSchema),
  })

  const { handleSubmit, reset } = addressConfirmForm

  const navigate = useNavigate()

  function handleAddressConfirmation(data: AddressConfirmFormData) {
    reset()
    navigate('/success', {
      state: data,
    })
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
      <OrderDetailsCheckout />
    </CheckoutContainer>
  )
}
