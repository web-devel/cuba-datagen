import * as React from 'react';
import {FormEvent} from "react";

interface Props {
  appUrl: string;
  onProceed: (url: string) => void;
}

export default function AppUrlForm(props: Props) {

  let input: HTMLInputElement | null;

  const proceed = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input == null || !input.value) {
      alert('Specify App URL');
      return;
    }
    props.onProceed(input.value);
  };

  return (
    <form onSubmit={proceed}>
      <input
        ref={(inp) => {
          input = inp;
        }}
        type="text"
        defaultValue={props.appUrl}
        placeholder="CUBA App URL"
      />
      <button type="submit">Proceed</button>
    </form>);
}