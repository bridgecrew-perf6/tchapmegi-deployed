export const getTask = state => {
    return {
        task: state.tasks.task_details.task.value,
        name: state.tasks.task_details.name.value,
        description: state.tasks.task_details.description.value
    };
};

export const getEditTaskId = state => {
    return state.tasks.actions.edit_task.id;
};
