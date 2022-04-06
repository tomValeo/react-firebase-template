import { collection, addDoc } from 'firebase/firestore'

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore();
    // add document to collection
    // find here : https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9
    // Add a document - without ID
    addDoc(collection(db, "projects"), {
      /* title: project.title,
      content: project.content, =*/
      ...project,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_PROJECT", project });
    }).catch((err) => {
      dispatch({ type: "CREATE_PROJECT_ERROR", err });
    })    
  };
};
