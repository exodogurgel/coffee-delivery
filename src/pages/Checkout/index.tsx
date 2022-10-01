import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { FormTitle } from './components/FormTitle'
import { ItemCart } from './components/ItemCart'
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
  OrderConfirm,
  TotalWrapper,
  ItemsListContainer,
  InputWrapper,
} from './styles'

// type FormData = {
//   cep: number
//   city: string
//   complement: string
//   neighborhood: string
//   number: number
//   payment: string
//   road: string
//   uf: string
// }

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddressConfirmFormData>({
    resolver: zodResolver(AddressConfirmValidationSchema),
  })

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
        <FormContainer>
          <AddressContainer>
            <FormTitle
              title="Endereço de Entrega"
              description="Informe o endereço onde deseja receber seu pedido"
              icon={<MapPinLine size={22} />}
              iconColor="yellow-700"
            />
            <InputWrapper>
              <MediumInput
                placeholder="CEP"
                type="number"
                {...register('cep', { valueAsNumber: true })}
              />
              {errors.cep ? (
                <p>
                  {errors.cep.message === 'Expected number, received nan'
                    ? 'Informe o cep corretamente'
                    : errors.cep.message}
                </p>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <LargerInput placeholder="Rua" {...register('road')} />
              {errors.road ? <p>{errors.road?.message}</p> : null}
            </InputWrapper>
            <div>
              <InputWrapper>
                <MediumInput
                  type="number"
                  placeholder="Número"
                  {...register('number', { valueAsNumber: true })}
                />
                {errors.number && (
                  <p>
                    {errors.number.message === 'Expected number, received nan'
                      ? 'Informe o numero da casa'
                      : errors.number.message}
                  </p>
                )}
              </InputWrapper>
              <OptionalInput>
                <LargerInput
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </OptionalInput>
            </div>
            <div>
              <InputWrapper>
                <MediumInput
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
                {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
              </InputWrapper>
              <InputWrapper>
                <LargerInput placeholder="Cidade" {...register('city')} />
                {errors.city && <p>{errors.city.message}</p>}
              </InputWrapper>
              <InputWrapper>
                <SmallInput placeholder="UF" {...register('uf')} />
                {errors.uf && <p>{errors.uf.message}</p>}
              </InputWrapper>
            </div>
          </AddressContainer>

          <PaymentMethodContainer>
            <FormTitle
              title="Pagamento"
              description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={<CurrencyDollar size={22} />}
              iconColor="purple-500"
            />
            {errors.payment ? <p>⚠ Informe o método de pagamento</p> : null}
            <PaymentList>
              <li>
                <input
                  type="radio"
                  id="creditCard"
                  value="creditCard"
                  {...register('payment')}
                />
                <label htmlFor="creditCard">
                  <CreditCard size={16} />
                  Cartão de crédito
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="debitCard"
                  value="debitCard"
                  {...register('payment')}
                />
                <label htmlFor="debitCard">
                  <Bank size={16} />
                  Cartão de débito
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="money"
                  value="money"
                  {...register('payment')}
                />
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
