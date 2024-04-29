import { updateTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  return (
    <form action={updateTask} className="border border-base-300 rounded-lg max-w-sm p-7">
        <input name="id" id="id" type="hidden" value={task?.id}></input>
        <input
          name="content"
          id="content"
          type="text"
          required
          defaultValue={task.content}
          className="input input-bordered w-full"
        ></input>
        <div className="form-control my-4">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text">Completed</span>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            className="checkbox checkbox-primary checkbox-sm"
            defaultChecked={task.completed}
          />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary btn-block btn-sm">
          Edit
        </button>
    </form>
  );
};

export default EditForm;
