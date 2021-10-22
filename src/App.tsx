import {FC, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import './styles.css';

type InputProps = {
    name: string;
    value?: string;
    register: any;
    defaultValue?: string
};

const Input: FC<InputProps> = ({name, value, register, defaultValue}) => {
    return <input name={name} ref={register}/>;
};

const App = () => {
    const {register, handleSubmit, watch} = useForm({
        mode: 'onChange',
    });

    const [getValue, setValue] = useState<string>('');

    const email = watch('email', getValue);

    // useEffect(() => {
    //     if (email) {
    //         const value = email.replace(/[^0-9]/g, '')
    //         setValue(value)
    //     }
    // }, [email]);

    const onSubmit = handleSubmit(async data => console.log(data));

    return (
        <div className="wrapp">
            <form onSubmit={onSubmit}>
                <Input
                    name="email"
                    register={register({required: true, pattern: /^[0-9]/g})}
                    // value={getValue}
                    // defaultValue={''}
                />
                <button>send</button>
            </form>
        </div>
    );
};

export default App;
