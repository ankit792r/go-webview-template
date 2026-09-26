import { useEffect } from 'preact/hooks';
import './app.css'


export function App() {
  useEffect(() => {
    window.hostEvent = async (event, playload) => {
      console.log("Received from HOST:", event, playload);
    }
  }, []);

  const invokeHost = () => {
    window.hostInvoke<string>("getVersion", {}).then((version) => {
      console.log(version);
    });
  }

  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={invokeHost}>Invoke HOST</button>
    </div>
  )
}
