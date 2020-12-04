export const updateItems = (items, itemToUpdate) => {
    const existingProduct = items.find((item) => item.order === itemToUpdate.order);

    if (existingProduct) {
        return items.map((item) => (item.order === itemToUpdate.order ? { ...itemToUpdate } : item));
    }

    return [...items, { ...itemToUpdate }];
};
