import { createAction } from '@reduxjs/toolkit';

const addItem = createAction('contacts/Add');
const deleteItem = createAction('contacts/Delete');
const changeFilter = createAction('contacts/ChangeFilter');

// const addItem = ({ name, number, id }) => ({
//   type: types.ADD,
//   payload: {
//     name,
//     number,
//     id,
//   },
// });

// const deleteItem = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default { addItem, deleteItem, changeFilter };
