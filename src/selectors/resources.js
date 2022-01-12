export const getResource = state => {
    let resource = state.resources.resource_details;
    return {
        resource_name: resource.resource_name.value,
        valid_from: resource.valid_from.value,
        valid_to: resource.valid_to.value,
        store: resource.store.value,
        business_sector: resource.business_sector.value,
        group: resource.group.value,
        article: resource.article.value,
        long_name: resource.long_name.value,
        address: resource.address.value
    };
};

export const getEditResourceId = state => state.resources.actions.edit_resource.id;
