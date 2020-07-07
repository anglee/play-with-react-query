import React from "react";
import { useQuery } from "react-query";
import ReactJson from "react-json-view";

interface IProps {
  userId: number;
}

interface IUser {
  name: string;
}

const Ang: IUser = {
  name: "Ang",
};
const Ying: IUser = {
  name: "Ying",
};

const usersMap = new Map<number, IUser>();
usersMap.set(123, Ang);
usersMap.set(456, Ying);

const getUser = async (userId: number): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersMap.has(userId)) {
        resolve(usersMap.get(userId));
      } else {
        reject(new Error(`No user with ID: ${userId}`));
      }
    }, 1000);
  });
};

const fetchUser = (s:string, arg: number) => {
  return getUser(arg);
}

const User = ({ userId }: IProps) => {
  const { data, isFetching } = useQuery(["user", userId], fetchUser);
  if (isFetching) {
    return <div>Loading</div>;
  }
  if (!data) {
    return <div>no data</div>;
  }
  return (
    <div>
      <ReactJson src={data} />
    </div>
  );
};

export default User;
