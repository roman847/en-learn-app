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
import pxToRem from 'core/functions/pxToRem';
import { Wrapper } from 'globalStyle';
import AuthLogInHeader from 'components/AuthLogInHeader/AuthLogInHeader';
import CustomButton from 'components/CustomButton/CustomButton';
import { signIn } from 'services/signIn/index';
import AuthForm from 'pages/Authorization/components/AuthForm/AuthForm';
import { Color } from 'core/variables/constants';
import MainImage from 'components/MainImage/MainImage';

interface IErrorAuthorization {
  isError: boolean;
  errorMessage: string;
}

const Authorization: FC = React.memo(() => {
  const email = useInput('', { minLength: 3, isEmail: false, maxLength: 30 });
  const password = useInput('', { minLength: 8, maxLength: 20 });
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState<IErrorAuthorization>({ isError: false, errorMessage: '' });

  const navigate = useNavigate();

  const submitHandler = async () => {
    if (
      email.value &&
      password.value &&
      !email.errorEmail.isError &&
      !password.errorMaxLength.isError &&
      !password.errorMinLength.isError
    ) {
      setIsLoading(true);
      const data = await signIn({ email: email.value, password: password.value });

      if (typeof data === 'string') {
        setIsLoading(false);
        setError({ isError: true, errorMessage: data });
      } else {
        setIsLoading(false);
        setError({ isError: false, errorMessage: '' });
        navigate('/');
      }
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
                Войдите в свой аккаунт<br></br>
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
                    {password.isDirty && password.errorMinLength.isError
                      ? password.errorMinLength.errorMessage
                      : ''}
                  </ErrorText>
                  <ErrorText>
                    {password.isDirty && password.errorMaxLength.isError
                      ? password.errorMaxLength.errorMessage
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
                    text="Войти"
                    color={Color.primary}
                    hover={Color.error}
                    handler={submitHandler}
                  />
                </ContainerButton>
              </AuthForm>
              <FooterAuth>
                <FooterText>Нет аккаунта?</FooterText>
                <Link to={'/registration'}>
                  <FooterLink>Зарегистрироваться</FooterLink>
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

export default Authorization;
