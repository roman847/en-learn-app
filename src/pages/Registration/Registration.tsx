import React, { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { useInput } from 'app/hooks';
import { override } from 'pages/Authorization/styleSpinner';
import CustomInput from 'components/CustomInput/CustomInput';
import {
  Container,
  MainContent,
  Title,
  LeftLogo,
  RightLogo,
  LeftSide,
  ContainerButton,
  ErrorText,
  ContainerInput,
  MainImageBox,
  FooterAuth,
  FooterText,
  FooterLink,
  ErrorMessage,
} from 'pages/Authorization/style';
import { createUser } from 'services/users/index';
import pxToRem from 'core/functions/pxToRem';
import { Wrapper } from 'globalStyle';
import AuthLogInHeader from 'components/AuthLogInHeader/AuthLogInHeader';
import CustomButton from 'components/CustomButton/CustomButton';
import AuthForm from 'pages/Authorization/components/AuthForm/AuthForm';
import { Color } from 'core/variables/constants';
import MainImage from 'components/MainImage/MainImage';
import { IErrorAuthorization } from 'core/interfaces/data';

const Registration: FC = React.memo(() => {
  const email = useInput('', { minLength: 3, isEmail: false, maxLength: 30 });
  const password = useInput('', { minLength: 8, maxLength: 20 });
  const name = useInput('', { minLength: 4, maxLength: 20, isEmpty: true });
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState<IErrorAuthorization>({ isError: false, errorMessage: '' });

  const navigate = useNavigate();

  const submitHandler = async () => {
    if (
      email.value &&
      password.value &&
      !email.errorEmail.isError &&
      !password.errorMaxLength.isError &&
      !password.errorMinLength.isError &&
      !name.errorIsEmpty.isError &&
      !name.errorMinLength.isError &&
      !name.errorMaxLength.isError
    ) {
      setIsLoading(true);
      const data = await createUser({
        email: email.value,
        password: password.value,
        name: name.value,
      });

      if (typeof data === 'string') {
        setIsLoading(false);
        setError({ isError: true, errorMessage: data });
      } else {
        setIsLoading(false);
        setError({ isError: false, errorMessage: '' });
        navigate('/authorization');
      }
    } else {
      console.log('error');
    }
  };

  return (
    <>
      <AuthLogInHeader />
      <Container>
        <Wrapper>
          {isLoading && (
            <ClipLoader
              color={Color.primary}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
          {Error.isError && <ErrorMessage>{Error.errorMessage}</ErrorMessage>}
          <MainContent>
            <LeftSide>
              <Title>
                Зарегистрируйся в <br></br>
                <LeftLogo>RS</LeftLogo>
                <RightLogo>LANG</RightLogo>
              </Title>

              <AuthForm>
                <ContainerInput>
                  <ErrorText>
                    {email.isDirty && email.errorEmail.isError ? email.errorEmail.errorMessage : ''}
                  </ErrorText>

                  <CustomInput
                    placeholder="email*"
                    value={email.value as string}
                    onChangeHandler={email.onChange}
                    onBlurHandler={email.onBlur}
                    borderColor={Color.blackText}
                  />
                </ContainerInput>
                <ContainerInput>
                  <ErrorText>
                    {name.isDirty && name.errorIsEmpty.isError
                      ? name.errorIsEmpty.errorMessage
                      : ''}
                  </ErrorText>
                  <ErrorText>
                    {name.isDirty && name.value.length > 0 && name.errorMinLength.isError
                      ? name.errorMinLength.errorMessage
                      : ''}
                  </ErrorText>
                  <ErrorText>
                    {name.isDirty && name.errorMaxLength.isError
                      ? name.errorMaxLength.errorMessage
                      : ''}
                  </ErrorText>
                  <CustomInput
                    placeholder="name*"
                    value={name.value as string}
                    onChangeHandler={name.onChange}
                    onBlurHandler={name.onBlur}
                    borderColor={Color.blackText}
                  />
                </ContainerInput>
                <ContainerInput>
                  <ErrorText>
                    {password.isDirty && password.errorMinLength.isError
                      ? password.errorMinLength.errorMessage + 8
                      : ''}
                  </ErrorText>
                  <ErrorText>
                    {password.isDirty && password.errorMaxLength.isError
                      ? password.errorMaxLength.errorMessage + 20
                      : ''}
                  </ErrorText>
                  <CustomInput
                    placeholder="password*"
                    value={password.value}
                    onChangeHandler={password.onChange}
                    borderColor={Color.blackText}
                    onBlurHandler={password.onBlur}
                  />
                </ContainerInput>
                <ContainerButton>
                  <CustomButton
                    text="Зарегистрироваться"
                    color={Color.primary}
                    hover={Color.error}
                    handler={submitHandler}
                  />
                </ContainerButton>
              </AuthForm>
              <FooterAuth>
                <FooterText>У вас уже есть аккаунт?</FooterText>
                <Link to={'/authorization'}>
                  <FooterLink>Войти</FooterLink>
                </Link>
              </FooterAuth>
            </LeftSide>
            <MainImageBox>
              <MainImage
                width={pxToRem(430)}
                height={pxToRem(582)}
                src="/png/jamie-street-Zqy-x7K5Qcg-unsplash 1.png"
              />
            </MainImageBox>
          </MainContent>
        </Wrapper>
      </Container>
    </>
  );
});

export default Registration;
