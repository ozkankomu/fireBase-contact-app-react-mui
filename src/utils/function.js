import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useState, useEffect } from "react";
import firebase from "./firebase";
import Toastify from "./tostify";

export const AddUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  Toastify("Contact added successfuly");

  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
    });
  }, []);
  return { isLoading, contactList };
};

export const deleteUser = (id) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  remove(ref(db, "users/" + id));
  Toastify("Contact Deleted Succesfully");
};

export const updateUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const updates = {};
  updates["users/" + info.id] = info;
  Toastify("Contact Updated Succesfully");
  return update(ref(db), updates);
};
