import {FC} from 'react';
import {useForm, Controller} from 'react-hook-form';
import './styles.css';

type Props = {
    value: string
    onChange: (...event: any[]) => void
}

const Input: FC<Props> = ({value, onChange}) => {
    const inpHandler = (e: any) => {
        const value = e.target.value.replace(/[^0-9]/g, '')
        onChange(value)
    }

    return <input type="text" value={value} onChange={inpHandler}/>
}

const App = () => {
    const defaultValue = '228'
    const {handleSubmit, control} = useForm({
        mode: 'onChange',
    });

    const onSubmit = handleSubmit(async data => console.log(data));

    return (
        <form onSubmit={onSubmit}>
            <Controller
                render={({onChange, value}) => {
                    return (
                        <Input
                            value={value}
                            onChange={onChange}
                        />
                    )
                }}
                defaultValue={defaultValue}
                name={"bitrate"}
                control={control}
                rules={{required: true}}
            />
            <button>send</button>
        </form>
    );
};

export default App;
