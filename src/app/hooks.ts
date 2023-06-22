/* eslint-disable prettier/prettier */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface IValidations {
  minLength: number;
  maxLength: number;
  isEmail?: boolean;
  isEmpty?: boolean;
}

interface IError {
  isError: boolean;
  errorMessage: string;
}

export const useValidation = (value: string, validations: IValidations) => {
  const [errorIsEmpty, setErrorIsEmpty] = useState<IError>({ isError: false, errorMessage: '' });
  const [errorMinLength, setIsMinLengthError] = useState<IError>({
    isError: false,
    errorMessage: '',
  });
  const [errorMaxLength, setIsErrorMaxLength] = useState<IError>({
    isError: false,
    errorMessage: '',
  });
  const [errorEmail, setErrorEmail] = useState<IError>({ isError: false, errorMessage: '' });

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations.minLength
            ? setIsMinLengthError({
              isError: true,
              errorMessage: `Минимальная длина ${validations.minLength} `,
            })
            : setIsMinLengthError({ isError: false, errorMessage: '' });
          break;
        case 'maxLength':
          value.length > validations.maxLength
            ? setIsErrorMaxLength({ isError: true, errorMessage: `Максимальная длина ${validations.maxLength}` })
            : setIsErrorMaxLength({ isError: false, errorMessage: '' });
          break;
        case 'isEmpty':
          value
            ? setErrorIsEmpty({ isError: false, errorMessage: '' })
            : setErrorIsEmpty({ isError: true, errorMessage: 'Поле обязательно для ввода' });
          break;
        case 'isEmail':
          const re =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
          re.test(value)
            ? setErrorEmail({ isError: false, errorMessage: '' })
            : setErrorEmail({ isError: true, errorMessage: 'Неправильный email' });
          break;
      }
    }
  }, [value]);

  return { errorIsEmpty, errorMinLength, errorEmail, errorMaxLength };
};

export const useInput = (initialValue: string, validations: IValidations) => {
  const [value, setValue] = useState<string>(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  return { value, onChange, onBlur, ...valid, isDirty };
};
