import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

// const Input: FC<any> = ({ register }) => {
//   const [getValue, setValue] = useState<string>('');

//   return (
//     <input
//       type="text"
//       value={getValue}
//       onChange={(e: any) => setValue(e.target.value)}
//       ref={register}
//       name="input"
//     />
//   );
// };

function App() {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const [getValue, setValue] = useState<string>('');

  const onSubmit = handleSubmit(async data => {
    const body = {
      value: data.input,
    };

    fetch('/api/some', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
    })
      .then(data => data.json)
      .then(data => console.log(data));
  });

  return (
    <div className="wrapp">
      <form onSubmit={onSubmit}>
        {/* <Input register={register({ required: true })} /> */}
        <input
          type="text"
          value={getValue}
          onChange={(e: any) => setValue(e.target.value)}
          ref={register}
          name="input"
        />
        <button>send</button>
      </form>
    </div>
  );
}

export default App;
