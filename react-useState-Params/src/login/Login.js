import ButtonContents from './components/ButtonContents';
import Header from './components/Header';
import UserInput from './components/UserInput';

const Login = () => {


    return (
        <div>
            <Header title='Sign in' />
            <UserInput />
            <ButtonContents />
        </div>
    )
};


export default Login;