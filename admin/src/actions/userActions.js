"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const createUser = async (formData) => {
  const salt = bcrypt.genSaltSync(5);
  const hashedPassword = await bcrypt.hash(formData.get("password"), salt);

  const data = {
    userName: formData.get("username"),
    userType: formData.get("usertype"),
    passowrd: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const existingUser = await db.adminUser.findUnique({
    where: { userName: data.userName },
  });

  if (existingUser) {
    return redirect("/users/add?errorMessage=Username already exists");
  }
  await db.adminUser.create({
    data: {
      userName: data.userName,
      userType: data.userType,
      password: hashedPassword,
    },
  });
  revalidatePath("/users", "page");
  redirect("/users");
};

export const getUsers = async () => {
  const users = await db.adminUser.findMany();
  return users;
};

export const getUniqueUser = async (userId) => {
  const user = await db.adminUser.findUnique({
    where: { id: userId },
  });
  return user;
};

export const updateUser = async (formData, userId) => {
  const data = {
    userName: formData.get("username"),
    userType: formData.get("usertype"),
    passowrd: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  if (data.passowrd) {
    const salt = bcrypt.genSaltSync(5);
    const hashedPassword = await bcrypt.hash(formData.get("password"), salt);
  }

  await db.adminUser.update({
    where: { id: parseInt(userId) },
    data: {
      userName: data.userName,
      userType: data.userType,
      ...(data.passowrd && { hashedPassword }),
    },
  });
  revalidatePath("/users", "page");
  redirect("/users");
};
