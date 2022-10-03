import { useFormContext } from 'react-hook-form'

import {
  FormContainer,
  OptionalInput,
  LargerInput,
  MediumInput,
  AddressContainer,
  SmallInput,
  PaymentMethodContainer,
  PaymentList,
  InputWrapper,
} from './styles'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { FormTitle } from '../FormTitle'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function Form() {
  const { register, formState } = useFormContext()
  const { errors } = formState as ErrorsType
  return (
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
                ? 'Informe um CEP válido'
                : errors.cep.message}
            </p>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <LargerInput placeholder="Rua" {...register('road')} />
          {errors.road ? <p>{errors.road.message}</p> : null}
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
            <MediumInput placeholder="Bairro" {...register('neighborhood')} />
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
  )
}
