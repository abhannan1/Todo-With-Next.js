"use client";

import { createTaskCustom } from "@/utils/actions";
import React, { useEffect } from "react";
import {useFormStatus, useFormState} from "react-dom"
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button className="btn btn-primary join-item" type="submit" disabled={pending}>
      {pending? 'Please wait...' : 'create Task'}
    </button>
  );
};

const initialState = {
  status:null,
  message:null
}

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState)

  useEffect(()=>{
    if(state.status == "success"){
      console.log(state)
      toast.success(`${state.message}`)
    }

    if(state.status == "error"){
      console.log(state)
      toast.error(`${state.message}`)
    }
  },[state])

  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
      <div className="join w-full">
        <input
          type="text"
          placeholder="type here "
          name="content"
          className="input input-bordered join-item w-full"
          required
        />
        <SubmitBtn/>
      </div>
    </form>
  );
};

export default TaskFormCustom;
