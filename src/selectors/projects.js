export const getProject = state => {
    let project = state.projects.project_details;
    return {
        project_name: project.project_name.value,
        customer_name: project.customer_name.value,
        contact_person: project.contact_person.value,
        start_date: project.start_date.value,
        end_date: project.end_date.value,
        fax: project.fax.value,
        phone: project.phone.value,
        email: project.email.value,
        city: project.city.value,
        address: project.address.value
    };
};

export const getEditProjectId = state => state.projects.actions.edit_project.id;
