export const updateItems = (items, itemToUpdate) => {
    const existingItem = items && items.length > 0 && items.find((item) => item.uniq === itemToUpdate.partnerUniq);

    if (existingItem) {
        return items.map((item) => (item.uniq === itemToUpdate.partnerUniq ? { ...item, active: !item.active } : item));
    }

    return [...items, { ...itemToUpdate }];
};
