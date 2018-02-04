import * as React from 'react';

interface Props {
  appUrl: string,
  onProceed: (url: string) => void
}

export default function ServerForm(props: Props) {

  let input: HTMLInputElement | null;
  const proceed = () => {
    if (input == null || !input.value) {
      alert ('Specify App URL');
      return;
    }
    props.onProceed(input.value);
  };

  return (
    <form onSubmit={proceed}>
      <input ref={(inp) => {
        input = inp;
      }} type="text" value={props.appUrl} placeholder="CUBA App URL"/>
      <button type="submit">Proceed</button>
    </form>);
}