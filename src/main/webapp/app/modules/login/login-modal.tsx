import React from 'react';
import { ValidatedField } from 'react-jhipster';
import { Alert, Button, Col, Form, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export interface ILoginModalProps {
  showModal: boolean;
  loginError: boolean;
  handleLogin: (username: string, password: string, rememberMe: boolean) => void;
  handleClose: () => void;
}

const LoginModal = (props: ILoginModalProps) => {
  const login = ({ username, password, rememberMe }) => {
    props.handleLogin(username, password, rememberMe);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm({ mode: 'onTouched' });

  const { loginError, handleClose } = props;

  return (
    <Modal isOpen={props.showModal} toggle={handleClose} backdrop="static" id="login-page" autoFocus={false} className="mt-6-5 mb-6-5">
      <Form onSubmit={handleSubmit(login)}>
        <ModalHeader id="login-title" data-cy="loginTitle" toggle={handleClose}>
          Sign in
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md="12">
              {loginError ? (
                <Alert color="danger" data-cy="loginError">
                  <strong>Failed to sign in!</strong> Please check your credentials and try again.
                </Alert>
              ) : null}
            </Col>
            <Col md="12">
              <ValidatedField
                name="username"
                placeholder="Username"
                required
                autoFocus
                data-cy="username"
                validate={{ required: 'Username cannot be empty!' }}
                register={register}
                error={errors.username}
                isTouched={touchedFields.username}
              />
              <ValidatedField
                name="password"
                type="password"
                placeholder="Your password"
                required
                data-cy="password"
                validate={{ required: 'Password cannot be empty!' }}
                register={register}
                error={errors.password}
                isTouched={touchedFields.password}
              />
              <ValidatedField
                name="rememberMe"
                type="checkbox"
                className="text-right mt-1 mb-1"
                check
                label="Remember me"
                value={true}
                register={register}
              />
            </Col>
          </Row>

          <div className="mt-1">&nbsp;</div>
          <Row className="justify-content-center">
            <Col md="12">
              <Button color="primary" type="submit" data-cy="submit" className="btn btn-block">
                Sign in
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2 mb-1">
            <Col md="12" className="text-center">
              <Link to="/account/reset/request" data-cy="forgetYourPasswordSelector">
                Forgot password?
              </Link>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Button color="info" type="submit" data-cy="submit" className="btn btn-block">
            <span>You don&apos;t have an account yet?</span>{' '}
            <Link to="/account/register" className="text-white">
              Click Here
            </Link>
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default LoginModal;
